define([
  // Libraries.
  'jquery',
  'lodash',
  'backbone',
  'marionette',

  // Templates
  'text!templates/main.html'
],

function($, _, Backbone, Marionette, mainTemplate) {

  'use strict';


  /* ======================================================================== */

  var App = new Backbone.Marionette.Application();

  // Set up basic paths.
  App.root = '/';

  // Add the main region, that will hold the page layout.
  // App.addRegions({
  //   main: '#content'
  // });

  // Adds any methods to be run after the app was initialized.
  App.addInitializer(function() {
    // Marionette.Application and it's regions don't play nicely w/ jqm
    //this.initAppLayout();
    this.initAppEvents();
  });

  App.on('initialize:before', function() {
    // console.log('App.initialize:before: ');
  });

  App.on('initialize:after', function(){
    // Can't use push state on Xcode
    Backbone.history.start({ pushState: false });
  });

  // The main initializing function sets up the basic layout and its regions.
  // App.initAppLayout = function() {

  //   var MainLayout = Backbone.Marionette.Layout.extend({
  //     template: _.template(mainTemplate),
  //     regions: {
  //       login: '#login',
  //       admin: '#admin'
  //     }
  //   });

  //   // Set the main layout
  //   App.main.show(new MainLayout());
  // };

  App.initAppEvents = function() {

    console.log('App.initAppEvents:');

    // All links with the role attribute set to nav-main will be
    // handled by the application's router.
    $('a[data-role=nav-main]').click(function(e) {
      e.preventDefault();
      App.Router.navigate($(this).attr('href'), {
        trigger: true
      });
    });

    $('div[data-role=page]').live('pagebeforeshow', function(event) {
       var currentPage = event.currentTarget;
       $(currentPage).trigger('create');
       //console.log('App.pagebeforeshow: ' + event.currentTarget);
    });

    // -----------------------------------------
    // Handle other application events here

    App.vent.on('test:submit', function(e) {
      // e is the SurveyModel instance passed as event object
      // Add the populated filter data to the model and update route
      console.log('App.test:submit: ', e);
      //App.Result.set({ filters: e.get('filters') });
      //App.Router.navigate('wall/' + e.get('wallId'), { trigger: true });
    });
  };

  return App;

});
