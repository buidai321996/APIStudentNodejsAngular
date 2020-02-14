const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({

  STUDENT_NM: {
    type: String,
    required: true
  },
  STUDENT_ADDRESS: {
    type: String,
    required: true
  },
  STUDENT_PHONE: {
    type: String,
    required: true
  },
  STUDENT_GMAIL: {
    type: String,
  },

});

module.exports = Student = mongoose.model('Student', StudentSchema);
