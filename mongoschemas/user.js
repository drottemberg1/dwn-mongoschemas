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
		required:true
	},
	firstName:{
		type:String,
		required:true
	},
	lastName:{
		type:String,
		required:true
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
		required:false
	},
	preferences:[{
		type:String,
		required:true,
		ref:"subcategories"
	}],
	mood:{
		type:String,
		required:true,
		ref:"moods"
	},
	verifyPhone:{
		type:Boolean,
		required:true
	}
},{bufferCommands:false,collection:"users",timestamps:true,versionKey:false,_id:false,id:false});
