///////////////////////////////////////////////////////
// ERROR STRINGS FOR LOCALIZATION

var notFlash_ERROR = "Only Actionscript Document can be converted.";
var notSaved_ERROR = "Unused library items are not copied.To copy them save the Actionscript document and convert the file.";
var noDOM_ERROR = "No valid Document is open.";
var nofilelocation_ERROR = "Failed to create HTML Canvas Document. Specify a destination filename to convert the file.";
var conversion_SUCCESS = "New HTML Canvas Document created.";

////////////////////////////////////////////////////////


function publishDoc(flaName, folderURI) {
    var doc = fl.openDocument(folderURI + "/" + flaName);
    doc.publish();
    fl.trace("Published: " + flaName);
    doc.close(false);
};
function batchFolder(folderURI) {
	var allFlas = FLfile.listFolder(folderURI + "/" + "*.fla", "files");
	for(var i = 0; i < allFlas.length; i++)
	{
	    var flaName = allFlas[i];
	    if(fl.tools.shiftIsDown)
	    {
	        stopScript = true;
	        break;
	    }
	

        if (flaName.substr(-7) === "CJS.fla" ) {
           fl.trace("Publishing: " + flaName);
           publishDoc(flaName, folderURI);
        } else {
           fl.trace("Skipping file: " + flaName);
        }

	}
};
function initBatch() {
	var folderURI = fl.browseForFolderURL("Please select the folder you want to recurse");
	var allFlas = FLfile.listFolder(folderURI, "directories");
	for(var i = 0; i < allFlas.length; i++)
	{
	    var subdir = allFlas[i];
	    if(fl.tools.shiftIsDown)
	    {
	        stopScript = true;
	        break;
	    }
        fl.trace("Processing Subfolder: " +  subdir);
        batchFolder(folderURI + "/" + subdir);

	}
};
initBatch();
