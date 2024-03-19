pipeline {
    agent any

    stages {
        stage('Setup'){
            steps {
                git branch: 'main', url: 'https://github.com/AlineBirello/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencias'){
            steps {
                bat'npm install'
            }
        }
        stage ('Executar Testes') {
    steps{
        bat '''set NO_COLOR=1
        npm run cy:run'''
    }
       }
    }
}