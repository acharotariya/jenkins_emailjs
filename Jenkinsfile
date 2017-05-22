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

                env.NODE_ENV = "test"

               print "Environment will be : ${env.NODE_ENV}"

               sh 'node -v'
               sh 'npm prune'
               sh 'npm install'
               sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {

                echo 'Deploying....'
            }
        }
    }
}
