define([

	'app',

	//libs
	'backbone'

],

function(App, Backbone) {
	
	'use strict';

	var SimpleModel = Backbone.Model.extend({

		defaults: {
			page: 'no page!',
			target: 'no target!'
		}
	});

	return SimpleModel;
});