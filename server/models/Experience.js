const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
 job:{type:String,required:true},
 start:{type:Date,required:true},
 end:{type:Date,required:true},
 note:{type:String},
})

exports.ExperienceSchema = ExperienceSchema;
exports.Experience= mongoose.model('Exprience', ExperienceSchema);

