#!/usr/bin/env groovy

pipeline {
  agent { label 'jenkinsAgent' }
  options{
    buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
  }
  parameters {
    string(defaultValue: '', description: 'git tag', name: 'gittag')
    string(defaultValue: "accessibility-cdn-qa", description: 's3 bucket', name: 's3bucket')
  }
  stages {
    stage('Checkout Tag') {
      when {
        expression { return (params.gittag =~ /v.*\..*\..*/) }
      }
      steps {
        sh """
          git fetch --tags
          git rev-parse ${params.gittag}
          git checkout ${params.gittag}
        """
      }
    }
    stage('Setup Build, git commit, repo, appname, etc') {
      steps {
        script {
          gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
          repo = "526930246559.dkr.ecr.us-east-1.amazonaws.com"
          appname = 'atom-web-accessibility'
          reponame = 'atom-web-accessibility'
          container_name = "$gitCommit${env.BUILD_ID}${env.BUILD_NUMBER}"
          temp_folder = "/var/tmp/build${container_name}"
          app_folder = "/app"
        }
        githubNotify account: 'KaplanTestPrep', credentialsId: 'atombot_github', repo: "$reponame", sha: "$gitCommit", description: 'Build started', status: 'PENDING'
        sh """
          eval \$(aws ecr get-login --region us-east-1)
          docker pull $repo/docker-atomapi-node
          docker tag $repo/docker-atomapi-node kaptest/docker-atomapi-node

          # temp container to hold artifacts
          docker run -d --rm --name $container_name \
            -v $temp_folder/cdn:$app_folder/cdn \
            ubuntu \
            bash -c "while :; do echo 'Hit CTRL+C'; sleep 1; done"
        """
      }
    }
    stage('Docker Build, creating container') {
      steps {
        sh """
          docker build \
          --build-arg BRANCH=${env.BRANCH_NAME} \
          --build-arg SHA=${gitCommit} \
          --build-arg BUILD_NUMBER=\$BUILD_NUMBER \
          -t $appname .

          eval \$(awssudo nonprod_ciorchestrator)

          # run our build in docker mounting volumes-from ^ temp_container
          docker run --volumes-from $container_name \
          $appname
        """
      }
    }
    stage('Copy from container to Volume') {
      steps {
        sh """
          # cp artifacts from temp container with the temp volume into current agent container
          docker cp ${container_name}:${app_folder}/cdn/ ./
        """
      }
    }
    stage('Moving files to S3'){
       when {
        expression { return (params.gittag =~ /v.*\..*\..*/ || env.BRANCH_NAME == "master" ) }
      }
      steps {
        sh """
          eval \$(awssudo nonprod_ciorchestrator)

          # remove live angular app
          aws s3 rm --recursive s3://${s3bucket}/
          
          # sync from dist directory to aws only files that do not exist
          echo $temp_folder && ls
          aws s3 sync ./cdn s3://${s3bucket} --acl public-read
        """
      }
    }
  }
  post {
    always {
      sh """
        docker rm -f $container_name || true
      """
      archiveArtifacts 'cdn/**/*'
    }
    success {
      githubNotify account: 'KaplanTestPrep', credentialsId: 'atombot_github', repo: "${reponame}", sha: "$gitCommit", description: 'Build was successful', status: 'SUCCESS'
    }
    unstable {
      githubNotify account: 'KaplanTestPrep', credentialsId: 'atombot_github', repo: "${reponame}", sha: "$gitCommit", description: 'Build was unstable', status: 'ERROR'
    }
    failure {
      githubNotify account: 'KaplanTestPrep', credentialsId: 'atombot_github', repo: "${reponame}", sha: "$gitCommit", description: 'Build failed', status: 'FAILURE'
    }
  }
}