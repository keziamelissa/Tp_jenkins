pipeline {
    agent any

    stages {
        stage('Préparation') {
            steps {
                echo "Clonage et installation des dépendances"
                sh 'python3 -m venv venv'
                sh './venv/bin/pip install --upgrade pip'
                sh './venv/bin/pip install -r requirements.txt'
            }
        }

        stage('Tests') {
            steps {
                echo "Exécution des tests"
                sh './venv/bin/python -m unittest discover -s tests'
            }
        }

        stage('Lancement de l\'app') {
            steps {
                echo "Lancement de Flask (en tâche de fond pour test)"
                sh 'nohup ./venv/bin/python app.py &'
            }
        }
    }

    post {
        always {
            echo "Pipeline terminé"
        }
    }
}
