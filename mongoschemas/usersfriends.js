"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	from:{
		type:String,
		required:true,
		ref:"users"
	},
	to:{
		type:String,
		required:true,
		ref:"users"
	},
	accepted:{
		type:Boolean
	},
	pending:{
		type:Boolean
	},
	
},{bufferCommands:false,collection:"usersfriends",timestamps:true,versionKey:false,_id:false,id:false}).index({createdAt:1,date:1});
