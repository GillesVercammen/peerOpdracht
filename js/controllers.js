angular.module('crescendo.controllers', [])

    /* LOGIN SCHERM CONTROLLER */
    .controller("LoginCtrl", function($scope, $state) {
        $scope.login = function() {
            $state.go( "app.serverinfo" );
        };
    })
    /* NAVIGATION CONTROLLER */
    .controller('AppCtrl', function ($scope) {
        console.log("hallo gilles AppCtrl");
        $scope.toggleSideBar = function() {
            if ($('#page-wrapper').hasClass('show-sidebar')) {
                // Do things on Nav Close
                $('#page-wrapper').removeClass('show-sidebar');
            } else {
                // Do things on Nav Open
                $('#page-wrapper').addClass('show-sidebar');
            }
        }
    })
    /* SERVERHEALTH SCHERM CONTROLLER */
    .controller('ServerCtrl', function ($scope,$localStorage) {

        //INITIALIZE MEMORY AT 70000 ON LOADING PAGE
        $scope.freeMemory = 70000;
        
        //removeMemory CLICKFUNCTION, TAKES freeMemory MODEL AS PARAMETER AND REMOVES MEMORY 
        $scope.removeMemory = function(fm) {
            if(fm > 0) {
                $scope.freeMemory = fm - 10000;
            } else {
                alert("No memory left to remove");
            }
            switchColor();
        }

        //addMemory CLICKFUNCTION, TAKES freeMemory MODEL AS PARAMETER AND ADDS MEMORY 
        $scope.addMemory = function(fm) {
            $scope.freeMemory = fm + 10000;
            switchColor();
        }

        //SWITCH THE COLOR OF THE DIV BASED ON THE VALUE OF $scope.freeMemory
        var switchColor = function() {
            if($scope.freeMemory >= 60000){
                $('.voorbeeldMemory').css({"background-color":"green"})
            } else if($scope.freeMemory >= 30000 && $scope.freeMemory < 60000){
                $('.voorbeeldMemory').css({"background-color":"orange"})
            } else if($scope.freeMemory >= 0 && $scope.freeMemory < 30000) {
                $('.voorbeeldMemory').css({"background-color":"red"})
            }
        }


        //INITIALIZ STATUS AT UP ON PAGE LOAD
        $scope.status = "up";

        //serverSwitch CLICKFUNCTION
        $scope.serverSwitch = function() {
            if($scope.status == "up") {
                $scope.status = "down";
                $(".voorbeeld").css({"background-color" : "red"})
            } else {
                $scope.status = "up";
                $(".voorbeeld").css({"background-color" : "green"})
            }
        }
    })


