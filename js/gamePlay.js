$(document).ready(function () {
    // alert("Let's Play Game")
})

var app = angular.module('myGame', ['ui.router']);

// Directives('enterGame', './directives/login.html');
Directives('naviGation', './directives/navigation.html');


app.config(function ($stateProvider, $urlRouterProvider) {
    var Game = {
        name: 'game', ulr: '/game', templateUrl: './directives/Game.html'
    }
    var Login = {
        name: 'login', ulr: '/login', templateUrl: './directives/login.html'
    }
    var Add = {
        name: 'addition', ulr: '/addition', templateUrl: './directives/Addition.html'
    }


    $stateProvider.state(Game);
    $stateProvider.state(Login);
    $stateProvider.state(Add);

    $urlRouterProvider.otherwise('/login');
});

function Directives(divName, tempName) {
    app.directive(divName, function () { return { templateUrl: tempName } });
}