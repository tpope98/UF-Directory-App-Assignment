/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  name: { type: String, required: true, unique: true } ,
  code: { type: String, required: true, unique: true },
  address: { type: String, unique: true },
  coordinates: {
	  latitude: { type: Number, unique: true },
	  longitude: { type: Number, unique: true }  
  },
  created_at: Date,
  updated_at: Date
  
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */
  var current_Date = new Date();
  this.updated_at = current_Date;
  if(!this.created_at)
	  this.created_at = current_Date;
  next();
  
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);



/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
