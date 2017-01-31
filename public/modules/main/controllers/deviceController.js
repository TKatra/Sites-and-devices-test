(function() {
  'use strict';

  angular
  .module('main')
  .controller('deviceController', DeviceController);

  DeviceController.$inject = ["device"];

  function DeviceController(device) {
    var vm = this;
    vm.device = device;
    console.log(vm.device);
  }
})();