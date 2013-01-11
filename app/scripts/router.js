define([

  // Libraries
  'backbone',
  'marionette',
  'controller',

  // Collections
  'collections/leads-collection'
],

function(Backbone, Marionette, controller) {

  'use strict';

  var AppRouter = Backbone.Marionette.AppRouter.extend({

    appRoutes: {
      '': 'initialize',
      'login': 'handleLoginRoute',
      'admin': 'handleAdminRoute'
    }
  });

  return new AppRouter({ controller: controller });
});
