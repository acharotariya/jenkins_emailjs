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
                sh 'make'
                echo 'Testing..'
                env.NODE_ENV = "test"

                print "Environment will be : ${env.NODE_ENV}"
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
