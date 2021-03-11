import groovy.io.FileType
import groovy.io.FileVisitResult

def findArchiveLocation(String directory) {
	File dir = new File(directory)
	def path = ""
	File archivelocationFile = null
	String archiveLocation = ""
	dir.traverse{
		File file -> if(file.name.contains("ArchiveLocation"))
		{
			path = file.getAbsolutePath()
		}
		
	}
	archivelocationFile = new File(path)
	archiveLocation = archivelocationFile.getText('UTF-8')
	
	return archiveLocation.toString()
}

def updateProperties(String propertieslocation, String propertyToUpdate,String propertyValue){

	Properties props = new Properties()
	File propFile = new File(propertieslocation)
	props.load(propFile.newDataInputStream())
	props.setProperty(propertyToUpdate,propertyValue)
	props.store(propFile.newWriter(),null)


}
