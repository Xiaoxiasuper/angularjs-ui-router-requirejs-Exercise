define(['app'],function(app){
    app.register.controller("homeController",function($scope){
        $scope.date=new Date();
    })
})