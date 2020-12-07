const assert = require('assert');
// const describe = require('describe');
const chai = require('chai');
const schemas = require('./index');
const mongoose = require('mongoose');
const expect = chai.expect;

describe('# Work Mocha', function () {
	it('Can assert', function () {
		assert.equal(true, true);
	});

});

describe('# Models should instance ', function () {
	// it('Users model should instance', function () {
	//
	// 	const Users = mongoose.model('Users', schemas.Users);
	// 	expect(Users).not.equal(undefined);
	// });
	//
	// it('Chat model should instance', function () {
	// 	const Chat = mongoose.model('Chat', schemas.Chat);
	// 	expect(Chat).not.equal(undefined);
	// });

	// it('ActivitiesReported model should instance', function () {
	// 	const ActivitiesReported = mongoose.model('ActivitiesReported', schemas.ActivitiesReported);
	// 	expect(ActivitiesReported).not.equal(undefined);
	// });
	
	it('FirebaseToken model should instance', function () {
		const FirebaseToken = mongoose.model('FirebaseToken', schemas.FirebaseToken);
		expect(FirebaseToken).not.equal(undefined);
	});

});
