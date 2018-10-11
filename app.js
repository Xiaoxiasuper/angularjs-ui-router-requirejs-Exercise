define(["angularAMD",'router'], function (ngAmd) {
    var app = angular.module('myapp', ['ui.router']);
    app.config(function($controllerProvider,$compileProvider){
        app.register = {
            controller : $controllerProvider.register,
            directive: $compileProvider.directive
        };
    })
    app.config(['$stateProvider',function($stateProvider) {
        $stateProvider
            .state('help', {
                url: '/help',
                views: {
                    '': ngAmd.route({
                        templateUrl:'view/help.html',
                        controller: 'helpController',
                        controllerUrl:'controller/helpController.js',
                    })
                }
               
            })
            .state('home', {
                url:'/home',
                views: {
                    '': ngAmd.route({
                        templateUrl: '../view/home.html',
                        controller: 'homeController',
                        controllerUrl: '../controller/homeController.js'
                    })
                }
            
            })
            .state('home.moreView', {   
                url: '/moreView',  
                views: {
                    '': ngAmd.route({
                        templateUrl: '../view/food.html',
                        controller: 'foodController',
                        controllerUrl: '../controller/foodController.js'
                    })
                }
            })
            .state('home.moreView.receive', {   
                url: '/moreView/receive',  
                views: {
                    '': ngAmd.route({
                        templateUrl: '../view/moreview/receive.html',
                        controller: 'moreView.receiveController',
                        controllerUrl: '../controller/moreview/receive.js'
                    })
                }
            })
            .state('home.timepiece', {   
                url: '/timepiece',  
                views: {
                    '': ngAmd.route({
                        templateUrl: '../view/timepiece.html',
                        controller: 'timepieceController',
                        controllerUrl: '../controller/timepieceController.js'
                    })
                },
            })
            .state('home.clock', {   
                url: '/clock',  
                views: {
                    '': ngAmd.route({
                        templateUrl: '../view/clock.html',
                        controller: 'clockController',
                        controllerUrl: '../controller/clockController.js'
                    })
                },
            })
            .state('home.show', {
                url: '/show',
                views: {
                    '': ngAmd.route({
                        templateUrl: '../view/show.html',
                        controller: 'showController',
                        controllerUrl: '../controller/showController.js'
                    })
                },
                resolve: {
                    timedir: ["$q", function($q) { 
                        var deferred = $q.defer();
                        require([
                            'directive/time.js'
                        ], function() { deferred.resolve(); });
                        return deferred.promise;
                    }]
                }
            })

            .state('home.show.game',{
                url:'/game',
                views: {
                    '': ngAmd.route({
                        templateUrl: '../view/game.html',
                        controller: 'gameController',
                        controllerUrl:'../controller/gameController.js',
                    })
                }
                /*

                resolve: {
                    detailController: ["$q", function($q) { 
                        var deferred = $q.defer();
                        require([
                            'controller/gameController.js' 
                        ], function() { deferred.resolve(); });
                        return deferred.promise;
                    }]
                }
                */
            })
            
    }]);

    app.run(function($state) {
        $state.go('help');
    });
    return app
})