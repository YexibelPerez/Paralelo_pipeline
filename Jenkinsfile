pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent_1"
                    }
                    steps {
                        git url: 'https://github.com/YexibelPerez/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key d76143d9-ada9-45ab-bfcc-11aba6dde7e6  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent_2"
                    }
                    steps {
                        git url: 'https://github.com/YexibelPerez/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key d76143d9-ada9-45ab-bfcc-11aba6dde7e6  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent_3"
                    }
                    steps {
                        git url: 'https://github.com/YexibelPerez/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key d76143d9-ada9-45ab-bfcc-11aba6dde7e6  --parallel'
                    
                    }
                }
                  
            }
             
        }

    }
            
}