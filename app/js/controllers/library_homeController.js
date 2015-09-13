courtanaControllers.controller('Library_homeController',
    function($scope, Api, $http, $localStorage) {
        $scope.user = $localStorage.message;
        //$scope.storage = $localStorage;

        $scope.save = function(){
            $localStorage.message = $scope.storage.counter;
            console.log($localStorage.message);
        }

        $scope.countUp = function(){
            if($scope.storage.counter === undefined){
                $scope.storage.counter = 0;
            }
            $scope.storage.counter = $scope.storage.counter + 1;
        }

        //$scope.verify = function(){
        //    window.location.href = "http://localhost:8000/app/#/library_home"
        //
        //}

        $scope.logout = function(){
            $scope.user = null;
            $localStorage.message = $scope.user;
            window.location.href = "./#/library_login"
        }


            if($scope.user[1]!== null){
                $scope.url = "http://localhost:7000/citations?drivers_license_number=" + $scope.user[1];
                $http.get($scope.url, '').
                    then(function(response){
                        $scope.citations = response.data;
                    }, function(response){
                        console.log("failure!!!!!");
                    });
            }



    });