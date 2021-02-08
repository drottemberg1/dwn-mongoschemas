"use strict";
const mongoose=require("mongoose");
const file=require("./file");
const uuid=require("node-uuid");

module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	label:{
		type:String,
		required:true
	},
	color1:{
		type:String,
		required:true
	},
	color2:{
		type:String,
		required:true
	},
	contrast:{
		type:String,
		required:true
	},
	order:{
		type:Number,
	},
	media:{
		type:file
	}
},{bufferCommands:false,collection:"moods",timestamps:true,versionKey:false,_id:false,id:false}).index({order:1}).index({label:1});
