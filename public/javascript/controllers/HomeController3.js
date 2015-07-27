(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController() {
		var vm = this;
		vm.multiply = function() {
			var str = vm.input1.split(' ');
			var output = str[0] * str[1];
			vm.output1 = output;
		};
		vm.multiply2 = function() {
			var str = vm.input2.split(' ');
			var output = str[0] * str[1];
			vm.output2 = output;
		};
	}
})();