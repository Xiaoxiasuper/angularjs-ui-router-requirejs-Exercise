define(['app','jquery','bootstrap'],function(app){
    app.register.controller("helpController",function($scope, $state) {  
        $scope.message=[
            {address:"address",
            addressHeigth:750,
            title:"huilo",
            describe:"错落有致，",
            display:null,
            nav:null
        }
        ]
        $scope.displays=[
            "产品展示","实物对比","出水"
        ]
        $scope.navs=[
            {name:'产品展示',id:6511139},
            {name:'实物对比',id:6511167},
            {name:'关于出水',id:6511172},
        ]
        $scope.add=function(index){
            $scope.message.splice(index+1,0,{address:'address',addressHeigth:750,title:"title",describe:"happy"})
        }
        $scope.delet=function(index){
            if(confirm('确定删除模块'+(index+1)+'吗？')){
                $scope.message.splice(index,1)
            }
        }
        $scope.display=function(index){
            if(!$scope.message[index].display){
                $scope.message[index].display="产品展示";
                $scope.sortdis();
            }
        }
        $scope.selectdis=function(index,dis){
            $scope.message[index].display=dis;
            $scope.sortdis();
        }
        $scope.selectnav=function(index,nav){
            $scope.message[index].nav=nav.name;
            $scope.message[index].navid=nav.id;
            $scope.sortdis();
        }
        $scope.sortdis=function(){
            var n=1;
            angular.forEach($scope.message, function (val) { 
                if(val.display!=null){
                    val.sort=n;
                    n++;
                }
            })
        }
        $scope.close=function(index){
            if(confirm('确定删除display吗？')){
                $scope.message[index].display=null;
                $scope.message[index].nav=null;
                $scope.message[index].navid=null;
                $scope.message[index].canot=false;
                sortdis();
            }
        }
        
        // $scope.changecode=function(){
        //     $scope.code='';
        //     angular.forEach($scope.message, function (val,index) { 
        //         if(val.display!=null){
        //             if(val.nav){
        //                 $scope.code+='<div class="dm_module" data-id="'+val.navid+'" data-title="'+val.nav+'" id="ids-module-'+val.navid+'"><p><strong style="line-height:1.5;"><span style="font-family:arial;"><font color="#cc0000">&nbsp;&gt; display &nbsp;</font></span><span style="color:#000000;">&nbsp;window '+val.sort+'&nbsp;&nbsp;<span style="font-size:10.0px;"><span style="color:#444444;"><span style="font-family:microsoft yahei;">'+val.display+'</span></span></span></span></strong><span style="line-height:1.5;">&nbsp;</span></p></div>';
        //             }else{
        //                 $scope.code+='<p><strong style="line-height:1.5;"><span style="font-family:arial;"><font color="#cc0000">&nbsp;&gt; display &nbsp;</font></span><span style="color:#000000;">&nbsp;window '+val.sort+' &nbsp;&nbsp;<span style="font-size:10.0px;"><span style="color:#444444;"><span style="font-family:microsoft yahei;">'+val.display+'</span></span></span></span></strong><span style="line-height:1.5;">&nbsp;</span></p>';
        //             }
        //         }
        //         $scope.code+='<table border="0" bordercolor="#000000" width="750"><tbody><tr><td rowspan="2"><img border="0" height="'+val.addressHeigth+'" id="bb" width="550" src="'+val.address+'" /></td><td><p><span style="font-size: 30px;"><span style="font-family: simhei;"><strong>'+val.title+'</strong></span></span></p></td></tr><tr><td align="center" valign="top"><table border="0" height="111" width="161"><tbody><tr><td align="left" height="200" valign="top" width="167"><p>'+val.describe+'</p></td></tr></tbody></table></td></tr></tbody></table>';
        //         if(index==$scope.message.length-1){
        //             $scope.code+='<div class="dm_module" data-id="6511126" data-title="畅购无忧" id="ids-module-6511126"><div><p><img src="https://img.alicdn.com/imgextra/i3/2320738513/TB2xgeekXXXXXXGXXXXXXXXXXXX_!!2320738513.jpg"/></p></div></div><div class="dm_module" data-id="6520943" data-title="关于快递" id="ids-module-6520943"><div><p><img src="https://img.alicdn.com/imgextra/i1/2320738513/TB2IAVVkXXXXXcbXXXXXXXXXXXX_!!2320738513.jpg" /></p></div></div><p>&nbsp;</p><p>&nbsp;</p>';
        //         }
        //     })
        // }

        $scope.changecode=function(){
            $scope.code='';
            angular.forEach($scope.message, function (val,index) { 
                if(val.display!=null){
                    if(val.nav){
                        $scope.code+='<div class="dm_module" data-id="'+val.navid+'" data-title="'+val.nav+'" id="ids-module-'+val.navid+'"><p><strong style="line-height:1.5;"><span style="font-family:arial;"><font color="#cc0000">&nbsp;&gt; display &nbsp;</font></span><span style="color:#000000;">&nbsp;window '+val.sort+'&nbsp;&nbsp;<span style="font-size:10.0px;"><span style="color:#444444;"><span style="font-family:microsoft yahei;">'+val.display+'</span></span></span></span></strong><span style="line-height:1.5;">&nbsp;</span></p></div>';
                    }else{
                        $scope.code+='<p><strong style="line-height:1.5;"><span style="font-family:arial;"><font color="#cc0000">&nbsp;&gt; display &nbsp;</font></span><span style="color:#000000;">&nbsp;window '+val.sort+' &nbsp;&nbsp;<span style="font-size:10.0px;"><span style="color:#444444;"><span style="font-family:microsoft yahei;">'+val.display+'</span></span></span></span></strong><span style="line-height:1.5;">&nbsp;</span></p>';
                    }
                }

                $scope.code+='<table border="0" bordercolor="#000000" width="750"><tbody><tr><td><img border="0" height="'+val.addressHeigth+'" id="bb" width="550" src="'+val.address+'" /></td><td align="left" valign="top" width="200"><h2 style="padding:56px 15px 56px 15px;font-size: 30px;font-family: simhei;"><strong>'+val.title+'</strong></h2><div style="padding:56px 15px 56px 15px;"><p>'+val.describe+'</p></div></td></tr></tbody></table>'

                if(index==$scope.message.length-1){
                    $scope.code+='<div class="dm_module" data-id="6511126" data-title="畅购无忧" id="ids-module-6511126"><div><p><img src="https://img.alicdn.com/imgextra/i3/2320738513/TB2xgeekXXXXXXGXXXXXXXXXXXX_!!2320738513.jpg"/></p></div></div><div class="dm_module" data-id="6520943" data-title="关于快递" id="ids-module-6520943"><div><p><img src="https://img.alicdn.com/imgextra/i1/2320738513/TB2IAVVkXXXXXcbXXXXXXXXXXXX_!!2320738513.jpg" /></p></div></div><p>&nbsp;</p><p>&nbsp;</p>';
                }
            })
        }
        $scope.copy=function(){
            
        }
        
    })
})