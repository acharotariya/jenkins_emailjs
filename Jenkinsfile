pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'make'
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                sh 'make check || true'
                echo 'Testing..'
                sh 'node --version'
                sh 'npm prune'
                sh 'npm install'
                sh 'npm test'

            }
        }
        stage('Deploy') {
            steps {
                sh 'make'
                echo 'Deploying....'
            }
        }
    }
}
