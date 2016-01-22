var app = angular.module('myApp', []);

app.controller('formCtrl', ['$scope', function($scope){
	$scope.a = {};
	$scope.a.totalValue = 0;
	$scope.a.vip1 = 0;
	$scope.a.vip7 = 0;
	$scope.a.vip30 = 0;
	$scope.a.phonebill = 0;
	$scope.a.again = 0;
	$scope.a.alipay = 0;
	$scope.a.battery = 0;
	$scope.a.thanks = 0;

	$scope.getTotalValue = function(){
		console.log('ok');
		$scope.a.totalValue = parseFloat($scope.a.vip1) * 7 + parseFloat($scope.a.vip7) * 38 +parseFloat($scope.a.vip30) * 120 + 
			parseFloat($scope.a.phonebill) * 10.2 + parseFloat($scope.a.again) * 0.3 + 
			parseFloat($scope.a.alipay) * 100 +parseFloat($scope.a.battery) * 65;
	};
}]);