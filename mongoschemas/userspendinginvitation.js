"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	userSendInvitation:{
		type:String,
		required:true,
		ref:"users"
	},
	numberOfInvitation:{
		type:String,
		required:true,
	},
	pending:{
		type:Boolean
	},
	
},{bufferCommands:false,collection:"userspendinginvitations",timestamps:true,versionKey:false,_id:false,id:false}).index({createdAt:1,date:1});
