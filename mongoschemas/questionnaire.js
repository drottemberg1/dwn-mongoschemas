"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");
const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	question:{
		type:String,
		required:true,
		ref:"questions",
		responses:[{
			type:String,
			required:true,
			ref:"responses"
		}]
	},
	user:{
		type:String,
		required:true,
		ref:"users"
	}
},{bufferCommands:false,collection:"questionnaire",timestamps:true,versionKey:false,_id:false,id:false});
