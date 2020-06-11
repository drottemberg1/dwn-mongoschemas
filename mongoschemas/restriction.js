"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");
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
	}
},{bufferCommands:false,collection:"restrictions",timestamps:true,versionKey:false,_id:false,id:false});
