#!/bin/bash

# Variables
PROJECT_ID="mulberry-landscaping-design"
IMAGE_NAME="mulberryld"
TAG="latest"  # Adjust this for versioning
REGION="northamerica-northeast2"  # Adjust based on your GKE region
CLUSTER_NAME="mulberryld-autopilot-cluster-1"
DEPLOYMENT_NAME="mulberryld-app-deployment"
SERVICE_NAME="mulberryld-app-service"
APP_NAME="mulberryld"
CONTAINER_PORT=8080  # Adjust for the port your container listens on
ARTIFACT_REGISTRY_SERVER="northamerica-northeast2-docker.pkg.dev"
REPOSITORY_NAME="mulberry-repo"
IMAGE_PULL_SECRET_NAME="gcr-json-key"


echo "1 - "Authenticate GCloud and Docker with GCR...""
gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS
gcloud config set project $PROJECT_ID --quiet 
gcloud services enable container.googleapis.com
gcloud container clusters get-credentials $CLUSTER_NAME --zone $REGION --project $PROJECT_ID
gcloud auth configure-docker

echo "2 - Build  Docker image..."
docker build -t $ARTIFACT_REGISTRY_SERVER/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$TAG .

echo "3 - Push the image to Google Artifact Registry..."
docker push $ARTIFACT_REGISTRY_SERVER/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$TAG

echo "4 - Get GKE credentials for your cluster..."
gcloud container clusters get-credentials $CLUSTER_NAME --region $REGION

echo "5 - Create a Kubernetes deployment..."
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: $DEPLOYMENT_NAME
spec:
  replicas: 1
  selector:
    matchLabels:
      app: $APP_NAME
  template:
    metadata:
      labels:
        app: $APP_NAME
    spec:
      containers:
      - name: $APP_NAME
        image: $ARTIFACT_REGISTRY_SERVER/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$TAG
        ports:
        - containerPort: $CONTAINER_PORT
        resources:  
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1024Mi"
            cpu: "1500m"
      imagePullSecrets:
      - name: "gcr-json-key"
EOF

echo "6 - Expose the deployment using a LoadBalancer service..."
kubectl expose deployment DEPLOYMENT_NAME --type=LoadBalancer --port=80 --target-port=80 --name=$SERVICE_NAME

echo "7 - Check the deployment status..."
kubectl get deployments
kubectl get services