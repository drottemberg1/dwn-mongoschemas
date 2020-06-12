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
	type:{
		type:String,
		required:true,
		ref:"questiontypes"
	},
	order:{
		type:Number,
		required:true
	},
	published:{
		type:Boolean,
		required:false
	},
	responses:[{
		type:String,
		required:true,
		ref:"responses"
	}]
},{bufferCommands:false,collection:"questions",timestamps:true,versionKey:false,_id:false,id:false});
