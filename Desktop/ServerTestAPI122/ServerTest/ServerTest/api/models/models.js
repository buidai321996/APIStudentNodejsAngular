const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  MODL_ID: {
    type: String,
    required: true
  },
  MODL_NM: {
    type: String,
    required: true
  },
  MIN: {
    type: Number,
    required: true
  },
  MAX: {
    type: Number,
    required: true
  },
  MN_STS: {
    type: String,
    required: true
  },
  MN_STS_T: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('Models', UserSchema);
