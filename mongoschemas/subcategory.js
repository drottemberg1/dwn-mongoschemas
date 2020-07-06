"use strict";
const mongoose=require("mongoose");
const config=require("getconfig");
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
	tags:[{
		type:String
	}],
	category:[{
		type:String,
		required:true,
		ref:"categories"
	}],
	moods:[
		{
			type:String,
			required:true,
			ref:"moods"
		}
	],
	order:{
		type:Number
	},
},{bufferCommands:false,collection:"subcategories",timestamps:true,versionKey:false,_id:false,id:false}).index({order:1});
