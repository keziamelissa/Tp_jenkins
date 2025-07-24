pipeline {
    agent any

    stages {
        stage('Préparation') {
            steps {
                echo "Clonage et installation des dépendances Node.js"
                sh 'npm install'
            }
        }

        stage('Tests') {
            steps {
                echo "Exécution des tests Node.js"
                sh 'npm test'
            }
        }

        stage('Lancement de l\'app') {
            steps {
                echo "Lancement de l\'application Node.js (en tâche de fond pour test)"
                sh 'nohup node index.js &'
            }
        }
    }

    post {
        always {
            echo "Pipeline terminé"
        }
    }
}
