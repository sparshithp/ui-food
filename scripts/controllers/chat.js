/**
 * Created by sparshithp on 10/18/17.
 */
app.controller('chatCtrl', function ($scope, $auth, $alert, $http, $rootScope) {
    $rootScope.title = "Chef Detail";

    $scope.left = function (index) {
        index--;
    }

    $scope.right = function (index) {
        index++;
    }

    $scope.chats = [

        {
            type: "input",
            data: "Laundry near me",
            req: true
        },
        {
            type: "text",
            data: "Here are the laundry near you",
            req: true
        },
        {
            type: "laundryCard",
            displayIndex: 0,
            data: [{
                name: "Insta Laundry",
                image: "https://media.treehugger.com/assets/images/2015/06/laundry_line.jpg.400x300_q90_crop-smart.jpg",
                wash: 50,
                washAndIron: 90,
                description: "Amazing laundry services with 24 hrs turnover"
            },
                {
                    name: "Namme Laundry",
                    image: "http://www.starsinnsuites.com/airport/wp-content/uploads/2015/03/facilities-coinlaundry-400x300.jpg",
                    wash: 60,
                    washAndIron: 80,
                    description: "Good laundry services with 24 hrs turnover"
                }
            ],
            req: false
        },
        {
            type: "input",
            data: "Schedule Pickup",
            req: true
        },
        {
            type: "text",
            data: "What time do you want us to pick up the clothes",
            req: true
        },
        {
            type: "input",
            data: "Around 3 PM",
            req: true
        },
        {
            type: "text",
            data: "Your booking with Insta Laundry is confirmed",
            req: true
        }
    ]
});