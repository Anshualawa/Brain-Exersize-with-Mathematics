$(document).ready(function () {
    // alert("Let's Play Game")
    card();
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

function card() {
    $('.card').html('<div class="card" style="width: 18rem;"><img src="..." class="card-img-top" alt="...">'
        + '< div class= "card-body" >'
        + '<h5 class="card-title">Card title</h5>'
        + '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card' + "s content.</p>"
        + '<a href="#" class="btn btn-primary">Go somewhere</a>'
        + '</div >'
        + '</div > ')
}