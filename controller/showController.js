define(['app'],function(app){
    app.register.controller("showController",function($scope, $state) {
        $scope.start = function() {
            $state.go('home.show.game');
        }
    })
})