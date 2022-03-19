/*global QUnit*/

sap.ui.define([
	"ns/businesspartners/controller/SuppliersViewName.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SuppliersViewName Controller");

	QUnit.test("I should test the SuppliersViewName controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
