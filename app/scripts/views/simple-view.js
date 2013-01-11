define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// template
	'text!templates/simple.html'
],

function($, _, Backbone, App, simpleTemplate) {

	'use strict';

	var SimpleView = Backbone.Marionette.ItemView.extend({

		template: _.template(simpleTemplate),

		initialize: function() {
			console.log('SimpleView.initialize: ', this.$el);
			//this.collection.on('change', this.render, this);
		}, 

		onRender: function() {
			App.vent.trigger('test:submit', this.model);
			$('#' + this.model.get('page')).trigger('create');
		}
	});

	return SimpleView;
});