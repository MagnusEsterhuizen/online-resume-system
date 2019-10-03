pipeline {
    agent {
        docker {
            image 'node:10.16.3-alpine'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install @date-io/moment'
                sh 'npm install @material-ui/core'
                sh 'npm install @material-ui/icons'
                sh 'npm install @material-ui/pickers'
                sh 'npm install @nivo/pie'
                sh 'npm install firebase'
                sh 'npm install moment'
                sh 'npm install nivo'
                sh 'npm install react'
                sh 'npm install react-dom'
                sh 'npm install react-material-color-picker'
                sh 'npm install react-quill-2'
                sh 'npm install react-router-dom'
                sh 'npm install react-scripts'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
