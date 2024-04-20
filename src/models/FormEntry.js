const mongoose = require('mongoose');

const formEntrySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    district: String,
    description: String,
      imagePath:String,
    uploadPath: String ,
    date:Date,
    time:String,
    latitude: Number, 
    longitude: Number,
    userid: {
      type: String,
      required: true,
      unique: true
    }


});

module.exports = mongoose.model('FormEntry', formEntrySchema);
