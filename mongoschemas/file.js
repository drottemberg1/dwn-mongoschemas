"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");

module.exports=new mongoose.Schema({
	url:{type:String},
	thumbnail:{type:String},
	type:{type:String}
},{timestamps:true,_id:false});
