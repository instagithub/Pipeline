pipeline {
  agent any

  stages {
    stage('Export') {
      steps {
        withAnt(installation: 'ant') {
          script { // some block
            def buildPath = "$PEGA_HOME\\samples\\jenkins\\Jenkins-build.xml"
            def applicationVersion = env.applicationVersion ? env.applicationVersion : ""
            def productVersion = env.productVersion ? env.productVersion : ""
            def applicationName = env.applicationName ? env.applicationName : ""
            def productName = env.productName ? env.productName : ""
            bat "%ANT_HOME%/bin/ant.bat -file $buildPath -DproductName = $productName -DproductVersion = $productVersion -DapplicationName = $applicationName -DapplicationVersion = $applicationVersion exportprops && exit %%ERRORLEVEL%%"
          }
        }
        bat 'copy D:\\prpcServiceUtils\\scripts\\utils\\%SystemName%_export.properties'
        bat '%PEGA_HOME%\\scripts\\utils\\prpcServiceUtils.bat export --connPropFile %WORKSPACE%\\%SystemName%_export.properties --artifactsDir %JENKINS_HOME%\\jobs\\insta-pipeline\\builds\\%BUILD_NUMBER%'
        sleep 3
      }
    }
    stage('Import') {
      steps {

        script {
          GroovyShell shell = new GroovyShell()
          def utils = shell.parse(new File("$JENKINS_HOME\\workspace\\insta-pipeline\\utils.groovy"))
          def directory = "$JENKINS_HOME\\jobs\\insta-pipeline\\builds\\${env.BUILD_NUMBER}"
          def archiveLocation = utils.findArchiveLocation(directory)
          def index = archiveLocation.indexOf('/')
          def length = archiveLocation.length()
          def artifactType = archiveLocation.substring(0, index)
          archiveLocation = archiveLocation.substring(index + 1, length)
          utils.updateProperties("D:\\prpcServiceUtils\\scripts\\utils\\prpcServiceUtils.properties", "import.artifactType", artifactType)
          utils.updateProperties("D:\\prpcServiceUtils\\scripts\\utils\\prpcServiceUtils.properties", "import.archivePath", archiveLocation)

          //Unsetting  all objects to null to avoid groovy serialization
          shell = null
          utils = null
          directory = null
          fullpath = null
          index = null
          length = null
          archiveLocation = null
          artifactType - null
          withAnt(installation: 'ant') {
            // some block
            def buildPath = "$PEGA_HOME\\samples\\jenkins\\Jenkins-build.xml"
            def applicationVersion = env.applicationVersion ? env.applicationVersion : ""
            def productVersion = env.productVersion ? env.productVersion : ""
            def applicationName = env.applicationName ? env.applicationName : ""
            def productName = env.productName ? env.productName : ""
            bat "%ANT_HOME%/bin/ant.bat -file $buildPath -DproductName = $productName -DproductVersion = $productVersion -DapplicationName = $applicationName -DapplicationVersion = $applicationVersion importprops && exit %%ERRORLEVEL%%"

          }
        }
        bat 'copy D:\\prpcServiceUtils\\scripts\\utils\\%SystemName%_import.properties'
        bat '%PEGA_HOME%\\scripts\\utils\\prpcServiceUtils.bat import --connPropFile %WORKSPACE%\\%SystemName%_import.properties --artifactsDir %JENKINS_HOME%\\jobs\\insta-pipeline\\builds\\%BUILD_NUMBER%'
        sleep 2
      }
    }
    stage('Test') {
        steps{
                echo 'Testing Start'
                if[-d "Automation"]; then
                   rmdir /s /q Automation

                 bat 'mkdir Automation'
                  dir('Automation') {
                    git branch: 'master',
                      url: 'https://github.com/instagithub/Automation.git'
                    bat 'mvn clean test'
                  }
            }
         }



    stage('Publish HTML RESULTS') {
      steps {
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false,
          keepAll: false,
          reportDir: '%JENKINS_HOME%\\workspace\\insta-pipeline\\Automation\\latestreports\\@TC-JobApplication\\cucumber-htmlreport',
          reportFiles: 'index.html',
          reportName: 'HTML Report', reportTitles: ''
        ])
      }
    }
  }
}