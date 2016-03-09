'use strict';

var FileMetadataHandler = require(process.cwd() + '/app/controllers/fileMetadataHandler.server.js');

module.exports = function (app, db) {
  
  var fileMetadataHandler = new FileMetadataHandler(db);
  
  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
      console.log("Getting homepage...");
    });
    
  app.route('/fileInfo')
    .get(fileMetadataHandler.getFileInfo)
    .post(fileMetadataHandler.alertFileInfo);
};
