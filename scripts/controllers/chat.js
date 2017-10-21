/**
 * Created by sparshithp on 10/18/17.
 */
app.controller('chatCtrl', function ($scope, $auth, $alert, $http, $rootScope, $timeout, $location, $anchorScroll, $http) {
    var url ="http://42309648.ngrok.io/web/laundry";

    $rootScope.title = "Chef Detail";

    $scope.left = function (index) {
        index--;
    };

    $scope.right = function (index) {
        index++;
    };

    $scope.sendArea = function(selectedArea) {
        console.log("yo" + selectedArea);
        $scope.chats.pop();
        $scope.chats.push({
            type:"input",
            data:selectedArea
        });
        var dataObj = {
            text : selectedArea
        };
        var res = $http.post(url, dataObj);
        res.success(function(data, status, headers, config) {
            $scope.chats.push(
                data
            );
            scrollDown();
        });
        res.error(function(data, status, headers, config) {
            $scope.chats.push(
                {
                    type: "text",
                    data: "Something went wrong. Please try again"
                }
            );
            scrollDown();
        });
    }

    $scope.schedule = function(laundryProvider) {
        $scope.chats.push({
            type:"input",
            data:"Schedule Pickup with " + laundryProvider.name
        });
        $timeout(function() {
            $location.hash('bottom');
            $anchorScroll();
        });
        //Make HTTP call to send vendorId as text
        var dataObj = {
            text : laundryProvider.id
        };
        var res = $http.post(url, dataObj);
        res.success(function(data, status, headers, config) {
            $scope.chats.push(
                data
            );
            $timeout(function() {
                $location.hash('bottom');
                $anchorScroll();
            });
        });
        res.error(function(data, status, headers, config) {
            $scope.chats.push(
                {
                    type: "text",
                    data: "Something went wrong. Please try again"
                }
            );
            scrollDown();
        });
    };

    $scope.postMessage = function() {
        var msg =  $scope.msg.trim();
        $scope.msg = "";
        console.log("sd " + msg );

        $scope.chats.push({
            type: "input",
            data: msg
        });
        var dataObj = {
            text : msg
        };
        var res = $http.post(url, dataObj);
        res.success(function(data, status, headers, config) {
            if (data.type == "area") {
                $scope.chats.push(
                    data
                );
                scrollDown();
                return;
            }
            $scope.chats.push(
                data
            );
            scrollDown();
        });
        res.error(function(data, status, headers, config) {
            $scope.chats.push(
                {
                    type: "text",
                    data: "Something went wrong. Please try again"
                }
            );
            scrollDown();
        });
    }

    $scope.chats = [];


    function scrollDown() {
        $timeout(function() {
            $location.hash('bottom');
            $anchorScroll();
        });
    }
});