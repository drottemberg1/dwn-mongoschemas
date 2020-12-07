'use strict';
const mongoose=require('mongoose');
const uuid=require("node-uuid");

const Schema=mongoose.Schema;

module.exports=new Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	user:{
		type:String,
		ref:'users',
		required:true
	},
	token:{
		type:String,
		required:true
	},
	userAgent:{
		type:String
	}
},{_id:false,id:false,bufferCommands:false,collection:'firebasetokens',timestamps:true,typeKey:'$type',versionKey:false});
