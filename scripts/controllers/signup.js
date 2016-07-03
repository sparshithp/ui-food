app.controller('SignupCtrl', function($scope, $auth, $rootScope) {
    $rootScope.title = "Signup";
    $scope.signup = function() {
      $auth.signup({
      	fullName: $scope.fullName,
        email: $scope.email,
        password: $scope.password
      });
    };
});