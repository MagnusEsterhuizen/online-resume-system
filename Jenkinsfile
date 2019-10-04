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
                sh 'npm install --save @csstools/normalize.css'
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
                sh './jenkins/scripts/build.sh'
            }
        }
        stage('Test: Unit') { 
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Test: UAT') { 
            steps {
                sh './jenkins/scripts/run.sh'
                input message: '
                    <small>Goto http://localhost:3000 to perform UAT (User Acceptance Testing)</small>
                    <br />
                    <ul>
                        <li><small>Click <strong>"Proceed"</strong> to release & deploy</small></li>
                        <li><small>Click <strong>"Abort"</strong> to cancel</small></li>
                    </ul>
                '
                sh './jenkins/scripts/kill.sh'
            }
        }
        stage('Release') { 
            steps {
                sh './jenkins/scripts/release.sh'
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/scripts/deploy.sh'
            }
        }
    }
}