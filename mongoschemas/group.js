"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	managers:[
		{
			type:String,
			ref:'User'
		}
	],
	name:{
		type:String,
	},
	users:[
		{
			type:String,
			ref:'User'
		}
	],
	chat:{
		type:String,
		ref:'chats'
	},
	cover:{
		web: {
			url: {
				type: String
			},
			type: {
				type: String
			}
		},
		mobile: {
			url: {
				type: String
			},
			type: {
				type: String
			}
		},
		original: {
			url: {
				type: String
			},
			type: {
				type: String
			}
		},
		webMobile: {
			url: {
				type: String
			},
			type: {
				type: String
			}
		},
		mini: {
			url: {
				type: String
			},
			type: {
				type: String
			}
		}
	},
	deleted:{
		type:Boolean
	},
	deletionDate:{
		type:Date
	}
	
},{bufferCommands:false,collection:"groups",timestamps:true,versionKey:false,_id:false,id:false}).index({users:1,chat:1});
