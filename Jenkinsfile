pipeline {
    agent any 
    
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/mostafanabil71/Test-App.git'
            }
        }
        
        stage('Install Node.js Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Package with Maven') {
            steps {
                // Run npm command to create a production-ready build
                sh 'npm run build:prod'
                
                // Use exec command to run Maven
                exec cmd: 'mvn clean package', returnStatus: true
            }
            post {
                success {
                    archiveArtifacts artifacts: '*/.jar', fingerprint: true
                    echo 'Packaging succeeded!'
                }
                failure {
                    echo 'Packaging failed!'
                }
            }
        }
    }
}