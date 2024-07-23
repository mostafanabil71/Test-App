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
        script {
          sh '''
            npm install
          '''
        }
      }
    }

    // Optional stage for building the application (consider removing if unnecessary)
    stage('Build Application') {
      steps {
        sh 'mvn clean install -DskipTests'  // Skip tests during build for faster execution
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

