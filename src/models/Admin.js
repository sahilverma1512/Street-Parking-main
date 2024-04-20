// models/user.js

const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Hash the password before saving it to the database



const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
