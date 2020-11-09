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
	activity:{
		type:String,
		required:true,
		ref:"activities"
	},
	available: {
		type:Boolean,
	}
},{bufferCommands:false,collection:"likes",timestamps:true,versionKey:false,_id:false,id:false}).index({user:1})
