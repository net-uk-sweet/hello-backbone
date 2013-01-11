define([

	// Libraries
	'jquery',
	'lodash',
	'backbone',
	'marionette',
	'app',

	// Models
	'models/simple-model',

	// Views
	'views/simple-view'
],

function($, _, Backbone, Marionette, App, SimpleModel, SimpleView) {

	'use strict';

	return {

		// Marionette.Controller has an initialize method by default
		initialize: function() {

			console.log('Controller.initialize:');

			// We can do any setup required here

			// On initialisation, we always need to go to log-in
			this.handleLoginRoute();

			//this.handleLocalStorageRoute();
		},

		handleLoginRoute: function() {
		
			console.log('Controller.handleLoginRoute:');

			// Need to load local data after successful log-in so we
			// can decide whether we need to restore an earlier session

			// App can manage our views
			$.mobile.changePage('#login', { reverse: false, changeHash: false });
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');

			$.mobile.changePage('#admin', { reverse: true, changeHash: false });
		},

		handleLocalStorageRoute: function() {

			console.log('Controller.handleLocalStorageRoute:');

			//App.main.show(new MainLayout());

			// Fetch the leads list from webSQL
			var leadsList = new LeadsList();
			leadsList.fetch({
				success: function(collection) {
					// Create a login view and pass it the collection
					App.main.currentView.content.show(
						new LoginView({ collection: collection })
					);
				}
			});
		}
	};
});