(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController() {
		var vm = this;
		vm.multiply = function() {
			var a = vm.input1;
			var b = vm.input2;
			while (b !== 0) {
				var t = b;
				b = a % b;
				a = t;
			}
			vm.output = a;
		};
	}
})();