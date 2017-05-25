pipeline {
    agent { docker 'node:6.3' }

    stages {
        stage('Build') {
            steps {

                echo 'Building..'
            }
        }
        stage('Test') {
            steps {

                echo 'Testing..'


               sh 'node -v'
               sh 'sudo npm install'
               sh 'node myfile.js'
            }
        }
        stage('Deploy') {
            steps {

                echo 'Deploying....'
            }
        }
    }
}
