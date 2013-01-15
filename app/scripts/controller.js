define([

	// Libraries
	'jquery',
	'lodash',
	'backbone',
	'marionette',
	'app',

	// Collections
	'collections/leads-collection',

	// Views
	'views/login-view',
	'views/admin-view',
	'views/component-view',
	'views/dialog-view'
],

function($, _, Backbone, Marionette, App, LeadsList, LoginView, AdminView, ComponentView, DialogView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('Controller.handleIndexRoute:');
			
			// We'll always want to go straight to log-in on startup
			this.handleLoginRoute();
		},

		handleLoginRoute: function() {

			console.log('Controller.handleLoginRoute:');

			// It's really just a nav view for the time being
			App.content.show(new LoginView());
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');
			
			// Fetch the leads list from local storage (webSQL)
			var leadsList = new LeadsList();
			leadsList.fetch({
				success: function(collection) {

					// Create a basic admin view and pass it the collection
					App.content.show(
						new AdminView({ collection: collection })
					);
				}
			});
		},

		handleComponentRoute: function() {

			console.log('Controller.handleComponentRoute:');

			App.content.show(new ComponentView());
		},

		handleDialogRoute: function() {

			console.log('Controller.handleDialogRoute:');
        	$('#page').attr('data-role', 'dialog');
			App.content.show(new DialogView());
			$('#page').popup('open');
		}
	};
});