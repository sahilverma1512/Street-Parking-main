const mongoose = require('mongoose');

const AdminLoginSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  Phone: {
    type: String,
    required: true,
    unique: true,
  },
  Address: {
    type: String,
    required: true,
    maxlength: 100
  },
  District: {
    type: String,
    required: true,
    maxlength: 50
  },
  State: {
    type: String,
    required: true,
    maxlength: 50
  },
  country: {
    type: String,
    required: true,
    maxlength: 50
  },
  Pincode: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},{ validateBeforeSave: false });

const AdminLogin = mongoose.model('AdminLogin', AdminLoginSchema);

module.exports = AdminLogin;
