pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', credentialsId: 'your-credentials-id', url: 'https://github.com/mostafanabil71/test.git' // Replace with your credentials and URL if needed
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean install' // Assuming Maven is now available
            }
        }
        stage('Package') {
            // Steps to package your application
        }
        // Add a 'Deploy' stage if needed
    }
}