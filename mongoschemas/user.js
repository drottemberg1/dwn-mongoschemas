"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");
const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	phoneNumber:{
		type:String,
	},
	firstName:{
		type:String,
	},
	lastName:{
		type:String,
	},
	restrictions:[{
		type:String,
		required:true,
		ref:"restrictions"
	}],
	friends:[{
		type:String,
		required:true,
		ref:"users"
	}],
	passwordResetToken:{
		type:String,
	},
	preferences:[{
		type:String,
		required:true,
		ref:"subcategories"
	}],
	mood:{
		type:String,
		ref:"moods"
	},
	type:{
		type:String,
		required:true,
		ref:"usertypes"
	},
	lastLogin:{
		type: Date
	},
	verifyPhone:{
		type:Boolean,
		required:true
	},
	ip:{
		type:String,
	},
	userAgent:{
		type:String,
	},
},{bufferCommands:false,collection:"users",timestamps:true,versionKey:false,_id:false,id:false}).index({createdAt:1,lastLogin:1});
