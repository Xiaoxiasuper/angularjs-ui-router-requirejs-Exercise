define(['app','jquery','bootstrap'],function(app){
    app.register.controller("mainpageController",function($scope, $state) {  
        $scope.goods=[
            {
                href:"//item.taobao.com/item.htm?id=522575299272&amp;scene=taobao_shop",
                imgUrl:"//gdp.alicdn.com/imgextra/i3/2320738513/O1CN012Cl0ALpiOgDnZEh_!!2320738513.jpg",
                title:"宜兴一厂 朱泥小品 金钟壶",
                money:"1000.00"
            },
            {
                href:"//item.taobao.com/item.htm?id=522575299272&amp;scene=taobao_shop",
                imgUrl:"//gdp.alicdn.com/imgextra/i3/2320738513/O1CN012Cl0ALpiOgDnZEh_!!2320738513.jpg",
                title:"宜兴一厂 朱泥小品 金钟壶",
                money:"1000.00"
            },
            {
                href:"//item.taobao.com/item.htm?id=522575299272&amp;scene=taobao_shop",
                imgUrl:"//gdp.alicdn.com/imgextra/i3/2320738513/O1CN012Cl0ALpiOgDnZEh_!!2320738513.jpg",
                title:"宜兴一厂 朱泥小品 金钟壶",
                money:"1000.00"
            },
            // {
            //     href:"//item.taobao.com/item.htm?id=522575299272&amp;scene=taobao_shop",
            //     imgUrl:"//gdp.alicdn.com/imgextra/i3/2320738513/O1CN012Cl0ALpiOgDnZEh_!!2320738513.jpg",
            //     title:"宜兴一厂 朱泥小品 金钟壶",
            //     money:"1000.00"
            // }

        ]

        function change(){
            var remainder= $scope.goods.length % 4;
            var trNum=($scope.goods.length+4-remainder)/4;
            $scope.trArr=[];
            $scope.code='';
            for(var i=0;i<trNum;i++){
                $scope.trArr.push(i*4);
            }
            for(var i=0;i<trNum;i++){
                var tdCon='';
                var row=4
                if(i==trNum-1){
                    row=remainder;
                }
                for(var j=0;j<row;j++){
                    var index=i*4+j;
                    tdCon+='<td width="237" height="307" align="center" valign="middle" ><a href="'+$scope.goods[index].href+'" target="_blank"><img src="'+$scope.goods[index].imgUrl+'"  style="width:220px;height: 220px;border: 0" /></a><div style="margin-top:15px;width:237px;height: 70px;"><p><span><span style="color:rgb(68,68,68);"><span style="font-size:14px;">'+$scope.goods[index].title+'</span></span></span></p><p style="margin-left:130px;"><span style="color:rgb(153,153,153);"><strong><span style="font-family:arial;">￥'+$scope.goods[index].money+'</span></strong></span></p></div></td>'
                }
                $scope.code+='<tr>'+tdCon+'</tr>'
                
            }
            $scope.code='<table width="950" border="0" cellspacing="0" style="width:948px;height:60px;"><tbody>'+$scope.code+'</tbody></table><p>&nbsp;</p>'
            
        }
        
        change();
        $scope.add=function(index){
            var newg={
                href:"",
                imgUrl:"",
                title:"",
                money:""
            }
            $scope.goods.splice(index+1,0,newg)
            change();
        }
        $scope.delet=function(index){
            $scope.goods.splice(index,1)
            change();
        }
        // var a=a||{};
        // (function(){
        //     a.test=function(){
        //         alert("happy")
        //     }
        // })()

        // a.test();
    })
})