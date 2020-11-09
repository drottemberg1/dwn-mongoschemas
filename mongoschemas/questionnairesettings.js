"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	numberOfQuestions:{
		type:Number,
		required:true,
	}
},{bufferCommands:false,collection:"questionnairesettings",timestamps:true,versionKey:false,_id:false,id:false});
