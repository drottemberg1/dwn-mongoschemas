"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");
const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},	users:[
		{
			type:String,
			ref:'User'
		}
	],
	messages:[
		{
			_id:{
				type:String,
				required:true
			},
			user:{
				type:String,
				ref:'User',
				required:true
			},
			date:{
				type:Date,
				required:true
			},
			body:{
				type:String,
				required:true
			},
			visibleTo:[
				{
					type:String,
					ref:'User'
				}
			],
			viewedBy:[
				{
					type:String,
					ref:'User'
				}
			]
		}
	],
	originalUsers:[
		{
			type:String,
			ref:'User'
		}
	],
	deleted:{
		type:Boolean
	},
	deletionDate:{
		type:Date
	}
},{bufferCommands:false,collection:"chats",timestamps:true,versionKey:false,_id:false,id:false});
