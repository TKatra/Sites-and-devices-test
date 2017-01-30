(function() {
  'use strict';

  angular
  .module('main')
  .controller('sitesController', SitesController);

  function SitesController() {
    var vm = this;
    vm.tagline = 'To the moon and back!';
  }
})();