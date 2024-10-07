#!/bin/bash

# Variables
PROJECT_ID="mulberry-landscaping-design"
NAMESPACE="mulberryld"
IMAGE_NAME="mulberryld"
TAG="latest"  
REGION="northamerica-northeast2"  
CLUSTER_NAME="mulberryld-autopilot-cluster-1"
DEPLOYMENT_NAME="mulberryld-app-deployment"
SERVICE_NAME="mulberryld-app-service"
APP_NAME="mulberryld"
CONTAINER_PORT=80  
ARTIFACT_REGISTRY_SERVER="northamerica-northeast2-docker.pkg.dev"
REPOSITORY_NAME="mulberry-repo"
IMAGE_PULL_SECRET_NAME="gcr-json-key"
DEPLOYMENT_YAML="deployment.yaml"


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
kubectl apply -f $DEPLOYMENT_YAML -n $NAMESPACE

echo "6 - Expose the deployment using a LoadBalancer service..."
kubectl expose deployment DEPLOYMENT_NAME --type=LoadBalancer --port=80 --target-port=80 --name=$SERVICE_NAME

echo "7 - Check the deployment status..."
kubectl get deployments
kubectl get services