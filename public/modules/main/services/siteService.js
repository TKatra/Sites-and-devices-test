(function() {
  'use strict';

  angular
  .module('main')
  .factory('siteService', SiteService);

  SiteService.$inject = ['$http'];

  function SiteService ($http) {
    return {
      get: function() {
        return $http.get('/api/sites');
      }
    };
  }
})();