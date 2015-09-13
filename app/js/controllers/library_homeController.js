courtanaControllers.controller('Library_homeController',
    function ($scope, Api, $http, $localStorage) {
        $scope.courtImage = 'court.png';
        $scope.user = $localStorage.message;
        console.log($scope.user);
        console.log("local storage " +  $localStorage.message);
        //$scope.storage = $localStorage;

        //$scope.verify = function(){
        //    window.location.href = "http://localhost:8000/app/#/library_home"
        //
        //}

        $scope.logout = function () {
            $scope.user = null;
            console.log("I made this null");
            $localStorage.message = $scope.user;
            window.location.href = "./#/library_login";
        }


        if ($scope.user[1] !== null) {
            console.log("This was called!!!!!");
            $scope.url = "http://localhost:7000/citations?drivers_license_number=" + $scope.user[1];
            $http.get($scope.url, '').
                then(function (response) {
                    $scope.citations = response.data;
                    console.log($scope.citations.length);
                    console.log($scope.citations);
                    if ($scope.citations.length > 0) {
                        $scope.courtImage = 'court_alert_red.png';
                    } else {
                        $scope.courtImage = 'court.png';
                    }
                }, function (response) {
                    console.log("failure!!!!!");
                });
        }

        $scope.checkCitations = function(){
            if($scope.citations.length > 0 && $scope.citations !== null){
                window.location.href = "./#/citationPage";
            }else {
                window.location.href = "./#/infoPage";
            }
        }


    });