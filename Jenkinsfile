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
                sh 'mvn clean package'
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