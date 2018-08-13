$(function(){
	//上方共通块	
	var tophtml = '';
	   tophtml += '<div class="toplogo"><p>家品会后台管理系统<span></span></p></div>';
	   tophtml += '<ul class="mestop">';
		   
		   tophtml += '<li>您好，<span id="sysUserName_HXshop">'+$('#realName').val()+'</span>  <span class="exit logout">退出</span>  <span class="date dateTime">'+(new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString()+'</span></li>';
		  
		  
	   tophtml += '</ul>';
	   tophtml += '<div style=" clear:both;"></div>';
	   tophtml += '<ul style="margin-top:-35px; height:35px;" class="menutop">';
		   tophtml += '<li hxauthmenutab="1" style="display:none;" id="userMannager"><img src="resource/images/home.png"  /><span>用户管理</span></li>';
		   tophtml += '<li hxauthmenutab="2" style="display:none;" id="goodsMannager"><img src="resource/images/check-list.png" style="width:20px;" /><span>商品管理</span></li>';
		   tophtml += '<li hxauthmenutab="4" style="display:none;" id="orderMannager"><img src="resource/images/folder-paper.png" style="width:22px;" /><span>订单管理</span></li>';
		   tophtml += '<li hxauthmenutab="3" style="display:none;" id="pageMannager"><img src="resource/images/pinpai.png" style="width:22px;" /><span>页面管理</span></li>';
	   tophtml += '</ul>';
   $('.topbg').html(tophtml);
   
   jQuery.requestJson(url, function(resdata){
	    if(resdata.ok){
	        var data=resdata.data;
	        var len=data.length;
	        for(var i=0;i<len;i++){
	            var menucode=data[i].menuCode;
	            var managerURL=data[i].managerURL;
//	            $("[hxauthmenu='"+menucode+"']").show();
	            var arr_menucode=menucode.split("#");
	            var tabid=parseInt(arr_menucode[0]);
	            var itemid=parseInt(arr_menucode[1]);
	            $("[hxauthmenutab='"+tabid+"']").show();
	            setTabDefaultURL(tabid,managerURL,itemid);
	        }        
	    }
	    $('.menutop>li:visible').eq(0).addClass('hit');
	    top.frames["leftFrame"].location.href = "left.htm";
	}, ''); 

   
   //上方菜单移入效果
   $('.menutop li').hover(function(){
		$(this).addClass('menutopHit');
	},function(){
		$(this).removeClass('menutopHit');
	});
	
	//用户管理
	$("#userMannager").click(function(){
		parent.leftMenuIndex = "1-1-1";
		changeTop();
	});
	
	//商品管理
	$("#goodsMannager").click(function(){
		parent.leftMenuIndex = "2-1-1";
		changeTop();
	});
	
	//订单管理
	$("#orderMannager").click(function(){
		parent.leftMenuIndex = "3-1-1";
		changeTop();
	});
	
/*	//页面管理 webpage
	$("#webpageMannager").click(function(){
		parent.window.frames['mainFrame'].location =  "/webpage/media.htm";
	});*/
	
	//页面管理 page
	$("#pageMannager").click(function(){
		parent.leftMenuIndex = "4-1-1";
		changeTop();
	});
	
	//登出
	$('.logout').click(function(){
		parent.window.location =  "logout.htm";
	});
	
	window.setInterval(function(){
		$(".dateTime").html((new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString());
	}, 1000); 
	
	changeTop();
});

function changeTop(){
	//当前页面上方按钮高亮
	var topMenuIndex = parent.leftMenuIndex;
	var topMenuIndexArr = topMenuIndex.split('-');
	var topMenuGrade1 = parseInt(topMenuIndexArr[0]) - 1;//一级菜单序号
	$('.menutop .hit').removeClass('hit');
	$('.menutop>li:visible').eq(topMenuGrade1).addClass('hit');
	if(parent.leftWindow.chageMenu){
		parent.leftWindow.chageMenu().click();
	}
}

function setTabDefaultURL(tabid,url,itemid){
    var tabName="";
    if(tabid==1){
        tabName="userMannager";
    }
    if(tabid==2){
        tabName="goodsMannager";    
    }
    if(tabid==3){
        tabName="pageMannager"; 
    }
    if(tabid==4){
        tabName="orderMannager";    
    }
        
    var nowitemid=$("#"+tabName).attr("itemid");

    if(typeof(nowitemid)=="undefined" || nowitemid>itemid){
        $("#"+tabName).attr("itemid",itemid);
    }
}