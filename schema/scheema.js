const mongoose = require('mongoose');

const Persons = mongoose.Schema({
 name:{
     type:String,
     required:true,
 },direction:{
     type:String,
     required:true,
 },date:{
     type:Date,
     default:new Date,
 }
})
module.exports= mongoose.model('Persons',Persons);