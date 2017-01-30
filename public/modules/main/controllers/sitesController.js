(function() {
  'use strict';

  angular
  .module('main')
  .controller('sitesController', SitesController);

  SitesController.$inject = ["sites"];

  function SitesController(sites) {
    var vm = this;
    vm.sites = sites;
  }
})();