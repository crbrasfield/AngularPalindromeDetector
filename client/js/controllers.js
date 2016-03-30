
var controllers = angular.module('myApp.controllers', []);

controllers.controller('WelcomeController', ['$scope', '$rootScope', function($scope, $rootScope) {


    $scope.userInput = '';
    $rootScope.userInputLower = null;


    $scope.enter = function() {
        $rootScope.userInputLower = $scope.userInput.toLowerCase();
        location.href = '/#/check'
    }



}]);

controllers.controller('CheckController', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.userInputLower = $rootScope.userInputLower;
    var userInputLower = $scope.userInputLower;
    var userInputReverse = reverseString(userInputLower);
    $scope.userInputReverse = userInputReverse;
    
    if (userInputLower === userInputReverse) {
        $scope.result = 'Your word is a palindrome!'
    } else {
        $scope.result = 'Your word was not a palindrome!'
    }
    
    $scope.retry = function() {
        location.href = '/'
    }
    
    
    
    
    function reverseString(str) {
    var temp = '';
    var i = str.length;

    while (i > 0) {
        temp += str.substring(i - 1, i);
        i--;
    }


    return temp;
}

}]);

