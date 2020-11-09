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
	mood:{
		type:String,
		required:true,
		ref:"moods"
	},
	date:{
		type:Date,
		required:true
	}
},{bufferCommands:false,collection:"usersmood",timestamps:true,versionKey:false,_id:false,id:false}).index({createdAt:1,date:1});
