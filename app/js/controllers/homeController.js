courtanaControllers.controller('HomeController',
  function($scope, Api, $http) {

   console.log("Home");
      $scope.findCitations = function(){
          console.log($scope.driversLicense);
          $scope.url = "http://localhost:7878/citations?drivers_license_number=" + $scope.driversLicense;
          $http.get($scope.url, '').
              then(function(response){
                  $scope.citations = response.data;
              }, function(response){
                  console.log("failure!!!!!");
              });

      }
  });