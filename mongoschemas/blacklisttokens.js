"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");
const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	token:{
		type:String,
		required:true
	},
	user:{
		type:String,
		ref:"users"
	}
},{bufferCommands:false,collection:"blacklisttoken",timestamps:true,versionKey:false,_id:false,id:false});
