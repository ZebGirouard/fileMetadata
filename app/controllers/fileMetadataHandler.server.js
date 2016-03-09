'use strict';

function FileMetadataHandler () {

	this.alertFileInfo = function (req, res) {
		res.json({fileSize: req.file.size});
	}

	this.getFileInfo = function (req, res) {
		res.json({toUpload: "Go back to homepage"});
	};
}

module.exports = FileMetadataHandler;
