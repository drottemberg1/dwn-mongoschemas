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
	group:{
		type:String,
		ref:"groups"
	},
	accepted:{
		type:Boolean
	},
	pending:{
		type:Boolean
	},
	plan:{
		type:String,
		required:true,
		ref:"plans"
	},
	deleted:{
		type:Boolean
	},
},{bufferCommands:false,collection:"plansinvitations",timestamps:true,versionKey:false,_id:false,id:false}).index({createdAt:1}).index({pending:1});
