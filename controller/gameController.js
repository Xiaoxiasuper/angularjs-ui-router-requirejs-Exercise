define(['app'],function(app){
    app.register.controller("gameController",function($scope, $state,$stateParams) {
        var time=30;
        $scope.input=true;
        $scope.btn=true;
        $scope.play=false;
        var a = $stateParams.Flag;
        $scope.operator=['+','-','*'];
        $scope.reslut=6;
        $scope.count=0;
        $scope.num1=1;
        $scope.num2=2;
        $scope.num3=3;
        $scope.operator1='+';
        $scope.operator2='+';
        $scope.change=function() {
            $scope.num1=Math.round(Math.random()*10);
            $scope.num2=Math.round(Math.random()*10);
            $scope.num3=Math.round(Math.random()*10);
            $scope.operator1=$scope.operator[Math.floor(Math.random()*3)];
            $scope.operator2=$scope.operator[Math.floor(Math.random()*3)];
            $scope.showresult=false;
            $scope.input=!$scope.input;
            document.getElementById('cal').value='';
            document.getElementById('cal').disabled=false;
            document.getElementById('cal').focus();
        }
        $scope.time=time;
        $scope.t=function(){
            var si=setInterval(function () {
                $scope.time --;
                $scope.$apply($scope.time);
                if($scope.time==0){
                    clearTimeout(si);
                    alert('时间结束，共答对'+$scope.count+ '题');
                }
            },1000)
        }
        $scope.calculate=function(){
            $scope.input=!$scope.input;
            $scope.judge='口算有待加强哦~ 正确答案是：';
            $scope.showresult=true;
            $scope.reslut=$scope.num1+$scope.operator1+$scope.num2+$scope.operator2+$scope.num3;
            $scope.reslut=eval($scope.reslut);
            var cal = document.getElementById('cal').value;
            //$state.go('show.game.detail',{Cal:cal,Res:$scope.reslut,Count:$scope.count});
            if(cal==$scope.reslut){
                $scope.judge='恭喜你，答对了！';
                $scope.count++;
            }
            document.getElementById('cal').disabled=true;
        };

        $scope.start=function () {
            $scope.btn=false;
            $scope.play=true;
            $scope.t();
        }
        $scope.goon=function () {
            $scope.count=0;
            $scope.time=time;
            $scope.start();
            $scope.change();
        }
    })
})