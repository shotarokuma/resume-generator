const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
 job:{type:String,maxlength:30,required:true},
 company:{type:String,maxlength:30,required:true},
 start:{type:Date,required:true},
 end:{type:Date,required:true},
 note:{type:String},
})

exports = module.exports = Experience= mongoose.model('Exprience', ExperienceSchema);
module.exports = Experience;

exports.ExperienceSchema = ExperienceSchema;
