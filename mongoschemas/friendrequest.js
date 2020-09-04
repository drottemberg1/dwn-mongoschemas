'use strict';
const mongoose=require('mongoose');
const config=require('getconfig');

const Schema=mongoose.Schema;

module.exports=new Schema({
	_id:{
		$type:String,
		required:true
	},
	receiver:{
		$type:String,
		ref:'User',
		required:true
	},
	sender:{
		$type:String,
		ref:'User',
		required:true
	},
	pending:{
		$type:Boolean
	},
	response:{
		$type:Boolean
	}
},{bufferCommands:false,collection:'friendrequests',timestamps:true,typeKey:'$type',versionKey:false});
