#!/bin/bash

# Variables

echo "1 - "Authenticate GCloud and Docker with GCR...""
gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS
gcloud config set project $PROJECT_ID --quiet 
gcloud services enable container.googleapis.com
gcloud container clusters get-credentials $CLUSTER_NAME --zone $REGION --project $PROJECT_ID
gcloud auth configure-docker

echo "2 - Build  Docker image..."
docker buildx create --use
#docker buildx build --platform $ARTIFACT_REGISTRY_SERVER/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$TAG . --push
docker build -t $ARTIFACT_REGISTRY_SERVER/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$TAG . --push
#docker build -t $ARTIFACT_REGISTRY_SERVER/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$TAG .

echo "3 - Push the image to Google Artifact Registry..."
#docker push $ARTIFACT_REGISTRY_SERVER/$PROJECT_ID/$REPOSITORY_NAME/$IMAGE_NAME:$TAG

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
            cpu: "2000m"
          limits:
            memory: "1024Mi"
            cpu: "2500m"
      imagePullSecrets:
      - name: "gcr-json-key"
EOF

echo "6 - Expose the deployment using a LoadBalancer service..."
kubectl expose deployment $DEPLOYMENT_NAME --type=LoadBalancer --port=80 --target-port=$CONTAINER_PORT

echo "7 - Check the deployment status..."
kubectl get deployments
kubectl get services