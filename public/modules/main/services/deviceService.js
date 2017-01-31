(function() {
  'use strict';

  angular
  .module('main')
  .factory('deviceService', DeviceService);

  DeviceService.$inject = ['$http'];

  function DeviceService ($http) {
    return {
      get: function() {
        return $http.get('/api/devices');
      },
      getById: function(data) {
        return $http.get('/api/devices/' + data);
      }
    };
  }
})();