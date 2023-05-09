$(document).ready(function () { 
    // alert("Let's Play Game")
})

var app = angular.module('myGame',['ui.router']);

Directives('enterGame','./directives/login.html');
Directives('naviGation','./directives/navigation.html');


app.config(function($stateProvider,$urlRouterProvider){});


function Directives(divName, tempName) {
    app.directive(divName, function () { return { templateUrl: tempName } });
}