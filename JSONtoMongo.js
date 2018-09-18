'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://tpope98:datadata1@ds261072.mlab.com:61072/my_database');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for(var x = 0; x < listing.entries.length; x++){
	var listing = x.code, x.name, x.coordinates, x.latitude, x.latitude, x.address;
	
	listing.save(function (err){
		
		if (err) throw err;
		
	});
	
	
}
 

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */