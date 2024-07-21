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
                dir('./package.js') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Build Application') {
            steps {
                dir('./app.js') {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Package with Maven') {
            steps {
                sh 'mvn clean package -Dmaven.javadoc.skip=true -Dmaven.install.skip=true -Dmaven.test.skip=true'
                archiveArtifacts artifacts: 'path/to/your/app/target/*.jar', fingerprint: true
            }
            post {
                success {
                    echo 'Packaging succeeded!'
                }
                failure {
                    echo 'Packaging failed!'
                }
            }
        }
    }
}
