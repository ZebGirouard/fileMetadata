'use strict';

var TimestampHandler = require(process.cwd() + '/app/controllers/timestampHandler.server.js');

module.exports = function (app, db) {
  
  var timestampHandler = new TimestampHandler(db);
  
  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
      console.log("Getting homepage...");
    });
    
  app.route('/:dateTime')
    .get(timestampHandler.getTimestamp);
};
