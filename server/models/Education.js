const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
 school:{type:String,required:true},
 start:{type:Date,required:true},
 end:{type:Date,required:true},
 note:{type:String},
})

exports = module.exports = Education =  mongoose.model('Education', EducationSchema);
module.exports = Education;

exports.EducationSchema = EducationSchema;




