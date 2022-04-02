const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {EducationSchema} = require('./Education');
const {ExperienceSchema} = require('./Experience');

const UserSchema = new Schema({
  name:{type:String,maxlength:30,required:true},
  passward:{type:String, maxlength:20,required:true},
  email:{type:String, maxlength:50,required:true},
  tel:{type:Number, required:true},
  education:[EducationSchema],
  experience:[ExperienceSchema]
});

const User= mongoose.model('User', UserSchema);

module.exports = User;

