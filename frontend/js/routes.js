/**
 * Created by Olof on 2014-06-08.
 */
var myApp =angular.module("myApp",[]);

myApp.config(function($routeProvider){
    $routeProvider.when('/workout',
        {
            templateUrl:"/frontend/views/workoutHome",
            controller:"/frontend/js/controllers/workoutHomeCtrl.js"
        })
    .otherwise({redirectTo:'/'});

})