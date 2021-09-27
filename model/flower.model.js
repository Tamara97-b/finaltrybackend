'use strict'
const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
    instructions: { type:String } ,
    photo:  { type : String } ,
    name:   { type :String } ,
    email: { type : String }  ,


});

const flowerModel = mongoose.model('flowers', flowerSchema);

module.exports = flowerModel;