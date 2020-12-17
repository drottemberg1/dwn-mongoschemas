"use strict";
const mongoose=require("mongoose");

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
	level:{
		type:String,
		required:true,
		ref:"gamificationlevels"
	},
	points:{
		type:Number,
		required:true,
	}
},{bufferCommands:false,collection:"gamification",timestamps:true,versionKey:false,_id:false,id:false});
