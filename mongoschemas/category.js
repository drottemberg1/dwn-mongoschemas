"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");

module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	title:{
		type:String,
		required:true
	},
	description:{
		type:String
	},
	url:{
		type:String
	},
	order:{
		type:Number
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
	moods:[
		{
			type:String,
			required:true,
			ref:"moods"
		}
	],
	tags:[{
		type:String
	}]
},{bufferCommands:false,collection:"categories",timestamps:true,versionKey:false,_id:false,id:false}).index({order:1,createdAt:1}).index({title:1});
