const mongoose = require('mongoose');

const ParkingData = new mongoose.Schema({
    name: {
        type: String,
       
    },
    contact: {
        type: String,
        
    },
    vehicleNumber: {
        type: String,
       
    },
    location: {
        type: String,
        
    },
 
});
module.exports= mongoose.model('ParkingData', ParkingData);


