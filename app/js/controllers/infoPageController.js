/**
 * Created by benjamin on 9/13/15.
 */
courtanaControllers.controller('InfoPageController',
    function ($scope, Api, $http, $localStorage) {
        $scope.courtImage = 'court.png';

        $scope.logout = function (){
            $scope.user = null;
            console.log("I made this null");
            $localStorage.message = $scope.user;
            window.location.href = "./#/library_login";
        }
    });