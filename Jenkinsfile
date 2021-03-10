
pipeline {
    agent any

    stages {
        stage('Export') {
            steps {
                withAnt(installation: 'ant') {
                    script { // some block
                    def buildPath = "$PEGA_HOME\\samples\\jenkins\\Jenkins-build.xml"
                    def applicationVersion = env.applicationVersion?env.applicationVersion:""
                    def productVersion = env.productVersion?env.productVersion:""
                    def applicationName = env.applicationName?env.applicationName:""
                    def productName = env.productName?env.productName:"'"
                    bat "%ANT_HOME%/bin/ant.bat -file $buildPath -DproductName = $productName -DproductVersion = $productVersion -DapplicationName = $applicationName -DapplicationVersion = $applicationVersion exportprops && exit %%ERRORLEVEL%%"
                    }    
                }
                bat 'copy D:\\prpcServiceUtils\\scripts\\utils\\%SystemName%_export.properties'
                bat '%PEGA_HOME%\\scripts\\utils\\prpcServiceUtils.bat export --connPropFile %WORKSPACE%\\%SystemName%_export.properties --artifactsDir D:\\prpcServiceUtils'
            }
        }
        stage('Import') {
            steps {
                withAnt(installation: 'ant') {
                    script { // some block
                    def buildPath = "$PEGA_HOME\\samples\\jenkins\\Jenkins-build.xml"
                    def applicationVersion = env.applicationVersion?env.applicationVersion:""
                    def productVersion = env.productVersion?env.productVersion:""
                    def applicationName = env.applicationName?env.applicationName:""
                    def productName = env.productName?env.productName:"'"
                    bat "%ANT_HOME%/bin/ant.bat -file $buildPath -DproductName = $productName -DproductVersion = $productVersion -DapplicationName = $applicationName -DapplicationVersion = $applicationVersion importprops && exit %%ERRORLEVEL%%"
                    
                    }    
                }
                bat 'copy D:\\prpcServiceUtils\\scripts\\utils\\%SystemName%_import.properties'
                bat '%PEGA_HOME%\\scripts\\utils\\prpcServiceUtils.bat import --connPropFile %WORKSPACE%\\%SystemName%_import.properties --artifactsDir D:\\prpcServiceUtils'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
