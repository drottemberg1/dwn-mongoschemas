"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	label: {
		type: String,
		required: true
	},
	points: {
		type: Number,
		required: true
	},
	identifier: {
		type: String,
		required: true
	},
	frequency:{
		type: String,
	}
},{bufferCommands:false,collection:"gamificationtypes",timestamps:true,versionKey:false,_id:false,id:false});
