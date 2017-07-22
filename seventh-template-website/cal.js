

var inputmode = false;
var current = 0.;
var result = 0;
var bin = 1;
var app = angular.module('myApp',[]);
var change= false;
var nodot = true;
var dotdepth = 0.1;
app.controller('ctrl',function($scope) {
	$scope.current = current;
	$scope.clear = function(){ 
		$scope.current = 0; 
		result = 0; 
		bin = 1; 
		nodot = true;
		dotdepth = 0.1;
	}
	$scope.delete = function(){ 
		$scope.current = 0;
		nodot = true;
		dotdepth = 0.1;
	}
	
	$scope.one = function(){ 
		if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+1):($scope.current += dotdepth*1 ,
			dotdepth /= 10);}
	$scope.two = function(){ 
		if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+2):($scope.current += dotdepth*2 ,
			dotdepth /= 10);}
	$scope.three = function(){
		if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+3):($scope.current += dotdepth*3 ,
			dotdepth /= 10);}
	$scope.four = function(){
	 	if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+4):($scope.current += dotdepth*4 ,
			dotdepth /= 10);}
	$scope.five = function(){
	 	if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+5):($scope.current += dotdepth*5 ,
			dotdepth /= 10);}
	$scope.six = function(){ 
		if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+6):($scope.current += dotdepth*6 ,
			dotdepth /= 10);}
	$scope.seven = function(){
		if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+7):($scope.current += dotdepth*7 ,
			dotdepth /= 10);}
	$scope.eight = function(){
		if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+8):($scope.current += dotdepth*8 ,
			dotdepth /= 10);}
	$scope.nine = function(){
	 	if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+9):($scope.current += dotdepth*9 ,
			dotdepth /= 10);}
	$scope.zero = function(){
	 	if (change) {
			$scope.current = 0;
		} 
		change = false;
		inputmode = true;
		nodot?($scope.current = 10*$scope.current+0):($scope.current += dotdepth*0 ,
			dotdepth /= 10);}

	$scope.plus = function(){ doequal(); bin = 1; inputmode = false; nodot = true; dotdepth = 0.1;}
	$scope.minus = function(){ doequal(); bin = 2; inputmode = false; nodot = true; dotdepth = 0.1;}
	$scope.multiply = function(){ doequal(); bin =3; inputmode = false; nodot = true; dotdepth = 0.1;}
	$scope.divide = function(){ doequal(); bin = 4; inputmode = false; nodot = true; dotdepth = 0.1;}

	$scope.dot = function(){ nodot = false;}
	
	$scope.equal = function(){
		doequal();
		result = 0;
		bin = 1;
		nodot = true; dotdepth = 0.1;
	}
	function doequal(){
		if (inputmode) {
			calculate(bin);
			$scope.current = result;
			change = true;
		}
	}

	

	function calculate(binary) {
		switch(binary){
			case 0:
				break;
			case 1:
				result += $scope.current;
				break;
			case 2:
				result -= $scope.current;
				break;
			case 3:
				result *= $scope.current;
				break;
			case 4:
				result /= $scope.current;
				break;
		}
	}


});


// 1
// 1+1=
// 1+1+1=


