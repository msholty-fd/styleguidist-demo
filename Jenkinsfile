node('k8s') {
    stage("Checkout") {
        checkout scm
    }

    stage('install') {
        sh("yarn install")
    }

    stage("deploy") {
        if (env.BRANCH_NAME.equals("master")) {
            sh("NODE_ENV=production yarn deploy")
            sh("NODE_ENV=production yarn build-scout")
            sh("NODE_ENV=production yarn deploy-scout")
        } else {
            sh("yarn deploy")
        }
    }
}
