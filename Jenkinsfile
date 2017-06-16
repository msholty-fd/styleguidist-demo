node('k8s') {
    stage("Checkout") {
        checkout scm
    }

    stage('install') {
        sh("yarn install")
    }

    stage("deploy") {
        if (env.BRANCH_NAME.equals("master")) {
            sh("NODE_ENV=production yarn run deploy")
            sh("NODE_ENV=production yarn run build-scout")
            sh("NODE_ENV=production yarn run deploy-scout")
        } else {
            sh("yarn run deploy")
        }
    }
}
