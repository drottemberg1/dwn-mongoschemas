"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");
const uuid=require("node-uuid");

module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	user:{
		type:String,
		required:true,
		ref:"users"
	},
	activities:{
		type:String,
		required:true,
		ref:"activities"
	}
},{bufferCommands:false,collection:"likes",timestamps:true,versionKey:false,_id:false,id:false});
