const assert = require('assert');
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
	it('Users model should instance', function () {

		const Users = mongoose.model('Users', schemas.Users);
		expect(Users).not.equal(undefined);
	});

	it('UserGiveAways model should instance', function () {

		const UserGiveAways = mongoose.model('UserGiveAways', schemas.UserGiveAways);
		expect(UserGiveAways).not.equal(undefined);
	});

	it('Tickets model should instance', function () {

		const Tickets = mongoose.model('Tickets', schemas.Tickets);
		expect(Tickets).not.equal(undefined);
	});

	it('Settings model should instance', function () {

		const Settings = mongoose.model('Settings', schemas.Settings);
		expect(Settings).not.equal(undefined);
	});

	it('Publishers model should instance', function () {

		const Publishers = mongoose.model('Publishers', schemas.Publishers);
		expect(Publishers).not.equal(undefined);
	});

	it('PromoCodeTypes model should instance', function () {

		const PromoCodeTypes = mongoose.model('PromoCodeTypes', schemas.PromoCodeTypes);
		expect(PromoCodeTypes).not.equal(undefined);
	});

	it('PromoCodes model should instance', function () {

		const PromoCodes = mongoose.model('PromoCodes', schemas.PromoCodes);
		expect(PromoCodes).not.equal(undefined);
	});

	it('ProductStatus model should instance', function () {

		const ProductStatus = mongoose.model('ProductStatus', schemas.ProductStatus);
		expect(ProductStatus).not.equal(undefined);
	});

	it('Products model should instance', function () {

		const Products = mongoose.model('Products', schemas.Products);
		expect(Products).not.equal(undefined);
	});

	it('ProductCategories model should instance', function () {

		const ProductCategories = mongoose.model('ProductCategories', schemas.ProductCategories);
		expect(ProductCategories).not.equal(undefined);
	});

	it('PointProducts model should instance', function () {

		const PointProducts = mongoose.model('PointProducts', schemas.PointProducts);
		expect(PointProducts).not.equal(undefined);
	});

	it('PointOrderTypes model should instance', function () {

		const PointOrderTypes = mongoose.model('PointOrderTypes', schemas.PointOrderTypes);
		expect(PointOrderTypes).not.equal(undefined);
	});

	it('PointOrders model should instance', function () {

		const PointOrders = mongoose.model('PointOrders', schemas.PointOrders);
		expect(PointOrders).not.equal(undefined);
	});

	it('PaymentTypes model should instance', function () {

		const PaymentTypes = mongoose.model('PaymentTypes', schemas.PaymentTypes);
		expect(PaymentTypes).not.equal(undefined);
	});

	it('OrderStatus model should instance', function () {

		const OrderStatus = mongoose.model('OrderStatus', schemas.OrderStatus);
		expect(OrderStatus).not.equal(undefined);
	});

	it('Orders model should instance', function () {

		const Orders = mongoose.model('Orders', schemas.Orders);
		expect(Orders).not.equal(undefined);
	});

	it('OrderReviews model should instance', function () {

		const OrderReviews = mongoose.model('OrderReviews', schemas.OrderReviews);
		expect(OrderReviews).not.equal(undefined);
	});

	it('HuntSpecifications model should instance', function () {

		const HuntSpecifications = mongoose.model('HuntSpecifications', schemas.HuntSpecifications);
		expect(HuntSpecifications).not.equal(undefined);
	});

	it('Hunts model should instance', function () {

		const Hunts = mongoose.model('Hunts', schemas.Hunts);
		expect(Hunts).not.equal(undefined);
	});

	it('HuntResponses model should instance', function () {

		const HuntResponses = mongoose.model('HuntResponses', schemas.HuntResponses);
		expect(HuntResponses).not.equal(undefined);
	});

	it('GiveAways model should instance', function () {

		const GiveAways = mongoose.model('GiveAways', schemas.GiveAways);
		expect(GiveAways).not.equal(undefined);
	});

	it('Genders model should instance', function () {

		const Genders = mongoose.model('Genders', schemas.Genders);
		expect(Genders).not.equal(undefined);
	});

	it('Colors model should instance', function () {

		const Colors = mongoose.model('Colors', schemas.Colors);
		expect(Colors).not.equal(undefined);
	});

	it('Carts model should instance', function () {

		const Carts = mongoose.model('Carts', schemas.Carts);
		expect(Carts).not.equal(undefined);
	});

	it('BlogPosts model should instance', function () {

		const BlogPosts = mongoose.model('BlogPosts', schemas.BlogPosts);
		expect(BlogPosts).not.equal(undefined);
	});

	it('BlogPostCategories model should instance', function () {

		const BlogPostCategories = mongoose.model('BlogPostCategories', schemas.BlogPostCategories);
		expect(BlogPostCategories).not.equal(undefined);
	});

	it('Sessions model should instance', function () {

		const Sessions = mongoose.model('Sessions', schemas.Sessions);
		expect(Sessions).not.equal(undefined);
	});

	it('HuntStatus model should instance', function () {

		const HuntStatus = mongoose.model('HuntStatus', schemas.HuntStatus);
		expect(HuntStatus).not.equal(undefined);
	});

	it('Likes model should instance', function () {

		const Likes = mongoose.model('Likes', schemas.Likes);
		expect(Likes).not.equal(undefined);
	});

	it('LikeTypes model should instance', function () {

		const LikeTypes = mongoose.model('LikeTypes', schemas.LikeTypes);
		expect(LikeTypes).not.equal(undefined);
	});

	it('TicketStatus model should instance', function () {

		const TicketStatus = mongoose.model('TicketStatus', schemas.TicketStatus);
		expect(TicketStatus).not.equal(undefined);
	});

	it('ExpenseTypes model should instance', function () {

		const ExpenseTypes = mongoose.model('ExpenseTypes', schemas.ExpenseTypes);
		expect(ExpenseTypes).not.equal(undefined);
	});

	it('Styles model should instance', function () {

		const Styles = mongoose.model('Styles', schemas.Styles);
		expect(Styles).not.equal(undefined);
	});

	it('CartStatus model should instance', function () {

		const CartStatus = mongoose.model('CartStatus', schemas.CartStatus);
		expect(CartStatus).not.equal(undefined);
	});

	it('Brands model should instance', function () {

		const Brands = mongoose.model('Brands', schemas.Brands);
		expect(Brands).not.equal(undefined);
	});

	it('VipEmails model should instance', function () {

		const VipEmails = mongoose.model('VipEmails', schemas.VipEmails);
		expect(VipEmails).not.equal(undefined);
	});

	it('ProductMessages model should instance', function () {

		const ProductMessages = mongoose.model('ProductMessages', schemas.ProductMessages);
		expect(ProductMessages).not.equal(undefined);
	});

	it('Auctions model should instance', function () {

		const Auctions = mongoose.model('Auctions', schemas.Auctions);
		expect(Auctions).not.equal(undefined);
	});

	it('Bids model should instance', function () {

		const Bids = mongoose.model('Bids', schemas.Bids);
		expect(Bids).not.equal(undefined);
	});

	it('BlackListIps model should instance', function () {

		const BlackListIps = mongoose.model('BlackListIps', schemas.BlackListIps);
		expect(BlackListIps).not.equal(undefined);
	});

	it('OrderTransferErrors model should instance', function () {

		const OrderTransferErrors = mongoose.model('OrderTransferErrors', schemas.OrderTransferErrors);
		expect(OrderTransferErrors).not.equal(undefined);
	});

	it('UserTypes model should instance', function () {

		const UserTypes = mongoose.model('UserTypes', schemas.UserTypes);
		expect(UserTypes).not.equal(undefined);
	});

});
