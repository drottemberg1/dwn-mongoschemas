"use strict";
const mongoose=require("mongoose");

const uuid=require("node-uuid");
module.exports=new mongoose.Schema({
	_id:{
		type:String,
		default:uuid.v1
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
	},
	phoneNumber:{
		type:String,
	},
	phoneCountryCode:{
		type:String,
	},
	firstName:{
		type:String,
	},
	appleId:{
		type:String,
	},
	lastName:{
		type:String,
	},
	restrictions:[{
		type:String,
		required:true,
		ref:"restrictions"
	}],
	friends:[{
		type:String,
		required:true,
		ref:"users"
	}],
	passwordResetToken:{
		type:String,
	},
	preferences:[{
		type:String,
		required:true,
		ref:"subcategories"
	}],
	birthday:{type:Date},
	mood:{
		type:String,
		ref:"moods"
	},
	type:{
		type:String,
		required:true,
		ref:"usertypes"
	},
	lastLogin:{
		type: Date
	},
	profilePicture:{
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
	bio:{
		type:String,
	},
	verifyPhone:{
		type:Boolean,
		required:true
	},
	lastActivity:{
		type:Date
	},
	ip:{
		type:String,
	},
	userAgent:{
		type:String,
	},
},{bufferCommands:false,collection:"users",timestamps:true,versionKey:false,_id:false,id:false}).index({createdAt:1,lastLogin:1});
