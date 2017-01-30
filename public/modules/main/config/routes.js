(function() {
  'use strict';

  angular
  .module('main')
  .config(mainRoutes);

  mainRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function mainRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('base', {
        templateUrl: 'modules/main/views/baseView.html'
      })
      .state('base.sites', {
        url: '/',
        controller: 'sitesController',
        controllerAs: 'sitesCtrl',
        templateUrl: 'modules/main/views/sitesView.html'
      })
      .state('base.nerd', {
        url: '/nerd',
        controller: 'nerdController',
        controllerAs: 'nerdCtrl',
        templateUrl: 'modules/main/views/nerdView.html',
      });
  }
})();