courtanaControllers.controller('CitationPageController',
    function ($scope, Api, $http, $localStorage) {
        $scope.courtImage = 'court_alert_red.png';
        $scope.user = $localStorage.message;

        $scope.save = function () {
            $localStorage.message = $scope.storage.counter;
            console.log($localStorage.message);
        }



        $scope.logout = function () {
            console.log("logout performed");
            $scope.user = null;
            $localStorage.message = $scope.user;
            window.location.href = "./#/library_login";
        }

        $scope.url = "http://localhost:7000/citations?drivers_license_number=" + $scope.user[1];
        console.log($scope.user);
        $http.get($scope.url, '').
            then(function (response) {
                $scope.citations = response.data;
                console.log($scope.citations);

            }, function (response) {
                console.log("failure!!!!!");
            });



    });