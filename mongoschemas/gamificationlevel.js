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
	texture:{
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
	fontColor:{
		type: String,
	}
	
},{bufferCommands:false,collection:"gamificationlevels",timestamps:true,versionKey:false,_id:false,id:false});
