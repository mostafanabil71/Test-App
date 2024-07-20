cpipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // This step checks out the code from your repository
                checkout scm
            }
        }
        stage('Build') {
            steps {
                // This step runs Maven to clean and install the project
                sh 'mvn clean install'
            }
        }
        stage('Package') {
            steps {
                // This step packages the project into a JAR file
                sh 'mvn package'
            }
        }
    }
    post {
        success {
            // This step archives the JAR file as a build artifact
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
        }
    }
}