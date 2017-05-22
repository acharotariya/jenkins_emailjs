pipeline {
    agent any

    stages {
        stage('Build') {
            steps {

                echo 'Building..'
            }
        }
        stage('Test') {
            steps {

                echo 'Testing..'

                sh 'node --version'
                sh 'npm prune'
                sh 'npm install'
                sh 'npm start'

            }
        }
        stage('Deploy') {
            steps {

                echo 'Deploying....'
            }
        }
    }
}
