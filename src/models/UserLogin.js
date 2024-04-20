const mongoose = require('mongoose');

const UserLoginSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50
  },
  lastName: {
    type: String,
    maxlength: 50
  },
  email: {
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
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Others'],
    required: true
  },
  address: {
    type: String,
    required: true,
    maxlength: 100
  },
  district: {
    type: String,
    required: true,
    maxlength: 50
  },
  state: {
    type: String,
    required: true,
    maxlength: 50
  },
  country: {
    type: String,
    required: true,
    maxlength: 50
  },
  pinCode: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},{ validateBeforeSave: false });

const UserLogin = mongoose.model('UserLogin', UserLoginSchema);

module.exports = UserLogin;
