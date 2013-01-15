define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/dialog.html'
],

function($, _, Backbone, App, dialogTemplate) {

	'use strict';

	var DialogView = Backbone.Marionette.ItemView.extend({

		template: _.template(dialogTemplate),

		events: {

			// TODO: using radio buttons here was causing an error when route updated to component
			'change input[type="radio"]' : 'handleClick',

			'click button': 'handleClick'
		},

		initialize: function() {

			// This is essentially the constructor and is called on instantiation
			console.log('LoginView.initialize:' /*, this.$el */);
		},

		onShow: function() {

			console.log('LoginView.onShow:');
		},

		handleClick: function(e) {
			App.vent.trigger('login:navigate', $(e.currentTarget).val());
		}
	});

	return DialogView;
});
