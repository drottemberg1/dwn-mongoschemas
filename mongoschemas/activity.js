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
	subcategories:[{
		type:String,
		required:true,
		ref:"subcategories"
	}],
	subCategoriesSearch:[{
		type:String
	}],
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
	}],
	media:[
		{
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
	}
	],
	order:{
		type:Number
	},
	duration:{
		type:String
	},
	location:{
		name:{
			type:String
		},
		geolocation:{
			type:{type:String},
			coordinates:[{
				type:Number
			}]
		}
	},
	restrictions:[{
		type:String,
		ref:"restrictions"
	}],
	date:{
		type:Date
	},
	url:{
		type:String
	},
	link:{
		type:String
	},
},{bufferCommands:false,collection:"activities",timestamps:true,versionKey:false,_id:false,id:false}).index({order:1}).index({subcategories:1}).index({title:1}).index({moods:1}).index({createdAt:1});
