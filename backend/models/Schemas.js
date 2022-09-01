const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
    college_name: {type:String, required:true},
    year_founded: {type:Number, required:true},
    city: {type:String, required:true},
    state: {type:String, required:true},
    country: {type:String, required:true},
    no_of_students: {type:Number, required:true},
    entryDate: {type:Date, default:Date.now}
});

const studentSchema = new Schema({
    student_name: {type:String, required:true},
    batch_year: {type:Number, required:true},
    college_id: {type:Schema.Types.ObjectId, ref:'college'},
});
//user: {type:Schema.Types.ObjectId, ref:'users'}
const College = mongoose.model('college', collegeSchema, 'college');
const Student = mongoose.model('student', studentSchema, 'student');
const mySchemas = {'College':College, 'Student':Student};

module.exports = mySchemas;