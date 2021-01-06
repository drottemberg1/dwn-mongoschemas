"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	label:{
		type:String,
		required:true
	},
	identifier:{
		type:String,
		required:true
	},
	order:{
		type:Number
	},
},{bufferCommands:false,collection:"restrictions",timestamps:true,versionKey:false,_id:false,id:false}).index({order:1,label:1});
