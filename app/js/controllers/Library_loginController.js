
courtanaControllers.controller('Library_loginController',
    function($scope, Api, $http, $localStorage) {
        $scope.user = {library_card: $scope.library_card, pin: $scope.pin}
        $scope.storage = $localStorage;

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

        $scope.verify = function(){
                console.log($scope.driversLicense);
                $scope.url = "http://localhost:7000/user/" + $scope.user.library_card+"/"+$scope.user.pin;
                $http.get($scope.url, '').
                    then(function(response){
                        $scope.users = response.data;
                        if($scope.users[0]!== undefined){
                            console.log("That was correct");

                            $localStorage.message = $scope.users[0];
                            window.location.href = "./#/library_home"

                        }else{
                            console.log("That was stupid!!!!");

                        }
                    }, function(response){
                        console.log("failure!!!!!");
                    });




        }


    });