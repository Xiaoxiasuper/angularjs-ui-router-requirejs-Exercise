define(['app'],function(app){
    app.register.controller("foodController",function($scope, $state,$sce) {
        $scope.date = new Date();
        $scope.AlexaData=[
            {sender:"Alexa",message:"你好！dccdc",time:$scope.date}
        ]
        angular.forEach($scope.AlexaData,function (val,index){
            val.message= $sce.trustAsHtml(val.message);
        })
        $scope.myRepeat="";
        $scope.send=function(){
            var time=new Date();
            //var message=$scope.text.replace(/\n/g, "<br/>")
            message= $sce.trustAsHtml($scope.myRepeat);
            $scope.AlexaData.push({sender:"myself",message:message,time:time})
            $scope.myRepeat="";
        }
        $scope.inputKeyUp = function (event) {
            var keycode = window.event?event.keyCode:event.which;
            if(event.ctrlKey && event.keyCode==13) {
                $scope.myRepeat =$scope.myRepeat +'\n';
                return;
            }
            if(keycode==13){
                return;
            }
        }
        
       
        
    })
})