///////////////////////////////////////////////////////
// ERROR STRINGS FOR LOCALIZATION

var notFlash_ERROR = "Only Actionscript Document can be converted.";
var notSaved_ERROR = "Unused library items are not copied.To copy them save the Actionscript document and convert the file.";
var noDOM_ERROR = "No valid Document is open.";
var nofilelocation_ERROR = "Failed to create HTML Canvas Document. Specify a destination filename to convert the file.";
var conversion_SUCCESS = "New HTML Canvas Document created.";

////////////////////////////////////////////////////////


var getKeyframes = function (layer) {
	var keyframes = [];
	for (var f in layer.frames) {
		if (f == layer.frames[f].startFrame) {
			keyframes.push({
				frame: layer.frames[f],
				index: f
			});
		}
	}
	return keyframes;
};

function scanTimeline(tl) {
	var timeLine = tl;
	var layers = timeLine.layers;

	for (var z = 0; z < layers.length; z++) {
		var frames = getKeyframes(layers[z]);
		for (var j = 0; j < frames.length; j++) {
			var ac = frames[j].frame.actionScript;

			if (ac != "") {

				var result = ac.match(/\/\/[ ]*\/\* js\s[^]*?\*\//g);

				if ('null' != result) {
					for (var k in result) {
						var arrayOfLines = result[k].split("\n");
						var toPasteArray = [];
						for (var l = 1; l < arrayOfLines.length - 1; l++) {
							toPasteArray.push(arrayOfLines[l].slice(2));
						}
						var modified_ac = toPasteArray.join("\n");
						frames[j].frame.actionScript = ac + "\n" + modified_ac;

					}

				}

			}

		}

	}

}

function convertAS(dom) {
	dom.currentTimeline = 0;
	scanTimeline(dom.getTimeline());
	var libraryItems = dom.library.items;
	for (var i = 0; i < libraryItems.length; i++) {
		item = libraryItems[i];
		if (item.itemType == 'movie clip') {
			scanTimeline(item.timeline);
		}
	}
}

function convertFile(dom, targetURI) {
	try {
		var filePath = dom.pathURI;
		height = dom.height;
		width = dom.width;
		bgColor = dom.backgroundColor;
		frameRate = dom.frameRate;
		var tls = dom.timelines;
		var sourceLibrary = dom.library.items;


		for (var j = 0; j < tls.length; j++) {

			
			if (targetURI == null) {
				fl.trace(nofilelocation_ERROR);
				return;
			}

			var dom2 = fl.createDocument("htmlcanvas");			
            /*
			var fileSave_start = fl.saveDocument(dom2, targetURI);
			if (!fileSave_start) {
				//alert(nofilelocation_ERROR);
				return;
			}
            */

			
			dom.editScene(j);
			var tl = dom.getTimeline();
			var fileName = tl.name;
			

			var m = tl.layerCount;
			tl.copyLayers(0, m - 1);
			dom2.width = width;
			dom2.height = height;
			dom2.backgroundColor = bgColor;
			dom2.frameRate = frameRate;
			var tl2 = dom2.getTimeline();
			tl2.pasteLayers();

			var unusedItems = [];

			var destLibrary = dom2.library;
			for (var sourceCount in sourceLibrary) {
				if (!destLibrary.itemExists(sourceLibrary[sourceCount].name)) {
					unusedItems.push(sourceLibrary[sourceCount]);
				}
			}

			var layerIndex = tl2.addNewLayer("unusedItem", "guide", false);

			for (var unusedCount in unusedItems) {
				dom2.addItem({
					x: 0,
					y: 0
				}, unusedItems[unusedCount]);
			}
			tl2.deleteLayer(layerIndex);



			convertAS(dom2);

            fl.trace("Saving: " + targetURI);
			var fileSave = fl.saveDocument(dom2, targetURI);
			fl.closeDocument(dom2, false);
			if (!fileSave) {
				fl.trace("Error on save: " + nofilelocation_ERROR);
				return;
			}
		}
		fl.trace(conversion_SUCCESS);
	} catch (err) {
		fl.trace("ERROR : " + err);
	}

}

var height;
var width;
var bgColor;
var frameRate;
var unusedItems;
//-------------------------------

function initConv (dom, targetURI) {

	if (!dom) {
		alert(noDOM_ERROR);
	} else if (dom.type !== "Flash") {
		alert(notFlash_ERROR);
	} else {
		convertFile(dom, targetURI);
	}
}
function preConvert2 (flaName, folderURI) {
    var outputURI = folderURI;
    var doc = fl.openDocument(folderURI + "/" + flaName);
    var targetURI = doc.pathURI.replace(".fla", "CJS.fla");

    initConv(doc, targetURI);
    doc.close(false);
};
function saveAS3 (flaName, folderURI) {
    var outputURI = folderURI;
    var doc = fl.openDocument(folderURI + "/" + flaName);
    doc.save(true);
    fl.trace("Saved as AS3: " + doc.name);
    doc.close(false);
};
function xxxinitBatch() {
	fl.outputPanel.clear();
	var folderURI = fl.browseForFolderURL("Please select the folder you want to recurse");
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
           fl.trace("Skipping: " + flaName);
        } else {
           fl.trace("Processing: " + flaName);
            saveAS3(flaName, folderURI);
            preConvert2(flaName, folderURI);
        }

	}
}
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
           fl.trace("Skipping: " + flaName);
        } else {
           fl.trace("Processing: " + flaName);
            saveAS3(flaName, folderURI);
            preConvert2(flaName, folderURI);
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
