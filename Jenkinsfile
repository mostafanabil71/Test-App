groovy
pipeline {
    agent any 

    stages {
        stage('Clone Repository') {
            steps {
            }
        }
        
        stage('Install Node.js Dependencies') {
            steps {
                // Ensure you have Node.js installed on your Jenkins
                sh 'npm install'
            }
        }
        
        stage('Build Application') {
            steps {
                sh 'npm run build' // Adjust this if you have a build script
            }
        }
        
        stage('Package with Maven') {
            steps {
                // Make sure your pom.xml is set up properly for packaging
                sh 'mvn clean package' // This assumes you have a Maven project to generate a JAR
            }
        }
    }
    
    post {
        success {
            archiveArtifacts artifacts: '**/*.jar', fingerprint: true
            echo 'Packaging succeeded!'
        }
        failure {
            echo 'Packaging failed!'
        }
    }
}
