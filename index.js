// app.js

var app = angular.module('personalApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    
    // create a default rule 
    $urlRouterProvider.otherwise('/nav/home');

    $stateProvider
        .state('nav',{
            url:'/nav',
            templateUrl:'templates/nav/nav.html',
            controller:'navController as nContr'
            //abstract:true // make sure there is always something in there
        })
        .state('nav.home', {
            parent:'nav',
            url:'/home',
            templateUrl:'templates/home/home.html',
            controller:'homeController as hContr' // for now best way to use controller as syntax
        })
        .state('nav.projects', {
            parent:'nav',
            url:'/projects',
            templateUrl:'templates/projects/projects.html',
            controller:'projectsController as pContr' 
        });


});

