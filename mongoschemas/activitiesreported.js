"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	activity:{
		type:String,
		required:true,
		ref:"activities"
	},
	types:[{
		type:String,
		ref:"reportedtypes"
	}],
	user:{
		type:String,
		ref:"users",
		required:true,
	},
	description:{
		type:String
	}
},{bufferCommands:false,collection:"activitiesreported",timestamps:true,versionKey:false,_id:false,id:false});
