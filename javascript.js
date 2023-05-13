var app = angular.module("myGame", ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    var Game = {
        name: 'game', ulr: '/game', templateUrl: './directives/Game.html'
    }
    $stateProvider.state(Game);
});


$(document).ready(function () { 
    alert("hello learner")
});




var x = Math.floor((Math.random() * 10) + 1);
var y = Math.floor((Math.random() * 10) + 1);



document.getElementById('x').innerHTML = x;
document.getElementById('y').innerHTML = y;
document.getElementById('e').innerHTML = email;




var a = 0;

// *************** Addition Game ******************


function Addition() {
    var p = x + y;

    var a = document.getElementById('n').value;

    if (a == '') {
        document.getElementById('ans').innerHTML = "Sovle the Problem";
        document.getElementById('ans').style.color = "red";
        document.getElementById('emot').innerHTML = "🤔";

    }
    else if (p == a) {
        document.getElementById('ans').innerHTML = "Right Ans";
        document.getElementById('ans').style.color = "green";
        document.getElementById('emot').innerHTML = '😎';
        return false;
    }
    else {
        document.getElementById('ans').innerHTML = "Wroungh Ans Again Solve the problem";
        document.getElementById('ans').style.color = "red";
        document.getElementById('emot').innerHTML = '😭';
    }
    return true;
}

// *************** Substraction Game ******************

function Substract() {
    var p = x - y;

    var a = document.getElementById('n').value;

    if (a == '') {
        document.getElementById('ans').innerHTML = "Sovle the Problem ";
        document.getElementById('ans').style.color = "red";
        document.getElementById('emot').innerHTML = "🤔";

    }
    else if (p == a) {
        document.getElementById('ans').innerHTML = "Right Ans";
        document.getElementById('ans').style.color = "green";
        document.getElementById('emot').innerHTML = '😎';
        return false;
    }
    else {
        document.getElementById('ans').innerHTML = "Wroungh Ans Again Solve the problem";
        document.getElementById('ans').style.color = "red";
        document.getElementById('emot').innerHTML = '😭';
    }
    return true;
}


// *************** Multiplication Game ******************


function Multi() {
    var p = x * y;

    var a = document.getElementById('n').value;

    if (a == '') {
        document.getElementById('emot').innerHTML = '🤔';
        document.getElementById('ans').innerHTML = "Sovle the Problem ";
        document.getElementById('ans').style.color = "red";

    }
    else if (p == a) {
        document.getElementById('ans').innerHTML = "Right Ans";
        document.getElementById('ans').style.color = "green";
        document.getElementById('emot').innerHTML = '😎';
        return false;
    }
    else {
        document.getElementById('ans').innerHTML = "Wroungh Ans Again Solve the problem";
        document.getElementById('ans').style.color = "red";
        document.getElementById('emot').innerHTML = '😭';

    }
    return true;
}




function LogOut() {
    alert("LogOut Successufly ");
    window.open('PlayGame.html', '_self');
    return true;
}