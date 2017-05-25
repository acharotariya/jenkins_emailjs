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
                withDockerContainer(args: "-u root", image: "${JOB_NAME}") {
                sh "npm install"
                }

               sh 'node -v'
               sh '/usr/local/bin/npm install'
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
