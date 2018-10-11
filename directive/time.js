define(['app'],function(app){
    app.register.directive('timeDir', function() {
        return {
            restrict: 'AE',
            template: '<div><h2 ng-show="time">还剩{{time}}秒</h2><br/><button ng-click="goon()" ng-show="!time">再来一局</button></div>',
            //scope: false,
            replace: true
        }
    })
})