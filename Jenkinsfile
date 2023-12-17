pipeline {
    agent any

    stages {
        stage('Push Docker image to ECR') {
            steps {
                script {
                    // Authenticate Docker with ECR
                    sh "aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 303968369354.dkr.ecr.ap-south-1.amazonaws.com"

                    // Build Docker image
                    sh "docker build -t ambika-api ."

                    // Tag Docker image
                    sh "docker tag ambika-api:latest 303968369354.dkr.ecr.ap-south-1.amazonaws.com/ambika-api:latest"
                    // Push Docker image to ECR
                    sh "docker push 303968369354.dkr.ecr.ap-south-1.amazonaws.com/ambika-api:latest"
                }
            }
        }

        stage('Pull Docker image from ECR') {
            steps {
                script {
                    // Pull Docker image from ECR
                    sh "docker pull 303968369354.dkr.ecr.ap-south-1.amazonaws.com/ambika-api:latest"

                    // Remove existing container if it exists
                     sh 'docker container ls -a -f name=My-practice-website -q | xargs -r docker container rm -f'

                    // Run Docker container
                     sh "docker run -itd --name My-practice-website -p 3000:3000 303968369354.dkr.ecr.ap-south-1.amazonaws.com/ambika-api:latest"
                    
                }
            }
        }
    }
}
