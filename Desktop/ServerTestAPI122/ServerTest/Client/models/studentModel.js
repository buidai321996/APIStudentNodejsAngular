const mysql = require('mysql');
const Schema = mysql.Schema;

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

module.exports = Student = mysql.model('Student', StudentSchema);