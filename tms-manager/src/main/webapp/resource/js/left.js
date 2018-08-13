// 左侧菜单共通
$(function(){
	var leftHtml = '';
	leftHtml += '<div class="leftimgtop"></div>';
	leftHtml += '<div class="leftimgmiddle" >';
	leftHtml += '<div class="leftcon" >';
	leftHtml += '<ul class="leftnavbar leftnavbar1">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>用户管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">';
	leftHtml += '<li style="display:none;" hxauthmenu="1#userinfoList" id="li_menu_user_list" onclick="jumpPage(\'userinfo/list.htm\')"><img src="resource/images/two.png" class="twoimg">用户列表</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="1#userinfoAdd" id="li_menu_user_add" onclick="jumpPage(\'userinfo/add.htm\')"><img src="resource/images/two.png" class="twoimg">增加用户</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="1#userinfoIsBlack" onclick="jumpPage(\'userinfo/isBlack.htm\')"><img src="resource/images/two.png" class="twoimg">黑名单列表</li>';
//	leftHtml += '<li  hxauthmenu="1#4" onclick="jumpPage(\'http://192.168.102.230/rule-manager/ruleInfo/rule_list.htm\')"><img src="resource/images/two.png" class="twoimg">促销列表</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';		

	leftHtml += '<ul class="leftnavbar leftnavbar2">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>商品信息管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">'; 
	leftHtml += '<li style="display:none;" hxauthmenu="2#productGoodsList" onclick="jumpPage(\'productGoods/list.htm\')"><img src="resource/images/two.png" class="twoimg">商品列表</li>';	
	leftHtml += '<li style="display:none;" hxauthmenu="2#recycleList" onclick="jumpPage(\'recycleList/list.htm\')"><img src="resource/images/two.png" class="twoimg">回收站列表</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#importGoods" onclick="jumpPage(\'productGoods/importGoods.htm\')"><img src="resource/images/two.png" class="twoimg">导入商品</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#filterGoods" onclick="jumpPage(\'productGoods/filterGoods.htm\')"><img src="resource/images/two.png" class="twoimg">查询商品</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#addGoods" onclick="jumpPage(\'productGoods/addGoods.htm\')"><img src="resource/images/two.png" class="twoimg">新建商品</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#productInfoList" onclick="jumpPage(\'productInfo/list.htm\')"><img src="resource/images/two.png" class="twoimg">产品管理</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#addProduct" onclick="jumpPage(\'productInfo/addProduct.htm\')"><img src="resource/images/two.png" class="twoimg">新建产品</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#adjustPrice" onclick="jumpPage(\'adjust/adjustPrice.htm\')"><img src="resource/images/two.png" class="twoimg">批量调整价格</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#productStockList" onclick="jumpPage(\'productStock/search.htm\')"><img src="resource/images/two.png" class="twoimg">批量调整库存</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';
	
	leftHtml += '<ul class="leftnavbar leftnavbar2">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>商品基础数据管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">'; 
	leftHtml += '<li style="display:none;" hxauthmenu="2#brandList" onclick="jumpPage(\'brand/list.htm\')"><img src="resource/images/two.png" class="twoimg">品牌管理</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#productTagList" onclick="jumpPage(\'productTag/list.htm\')"><img src="resource/images/two.png" class="twoimg">标签管理</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#productCategoryList" onclick="jumpPage(\'productCategory/list.htm\')"><img src="resource/images/two.png" class="twoimg">分类管理</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="2#productAttributesList" onclick="jumpPage(\'productAttributes/list.htm\')"><img src="resource/images/two.png" class="twoimg">属性模板管理</li>';	
	leftHtml += '<li style="display:none;" hxauthmenu="2#serviceTotalList" onclick="jumpPage(\'serviceTotal/list.htm\')"><img src="resource/images/two.png" class="twoimg">综合服务费查询</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';		
	
	leftHtml += '<ul class="leftnavbar leftnavbar3">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>销售订单</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">'; 
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderInfoList" onclick="jumpPage(\'orderInfo/showList.htm\')"><img src="resource/images/two.png" class="twoimg">订单列表</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#addOrder" onclick="jumpPage(\'orderInfo/addOrder.htm\')"><img src="resource/images/two.png" class="twoimg">添加订单</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderInfoSearch" onclick="jumpPage(\'orderInfo/search.htm\')"><img src="resource/images/two.png" class="twoimg">订单查询</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderSuspendList" onclick="jumpPage(\'orderSuspend/list.htm\')"><img src="resource/images/two.png" class="twoimg">挂起单列表</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderQuestionList" onclick="jumpPage(\'orderQuestion/list.htm\')"><img src="resource/images/two.png" class="twoimg">问题单列表</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';
	
	leftHtml += '<ul class="leftnavbar leftnavbar3">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>销售退货</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">'; 
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderReturnList"  onclick="jumpPage(\'orderReturn/list.htm\')"><img src="resource/images/two.png" class="twoimg">退单列表</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderReturnCheckList" onclick="jumpPage(\'unCheckOrderReturn/list.htm\')"><img src="resource/images/two.png" class="twoimg">待确定退单</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderReturnShipList"  onclick="jumpPage(\'unShipmentOrderReturn/list.htm\')"><img src="resource/images/two.png" class="twoimg">待收货退单</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderReturnQualityList" onclick="jumpPage(\'unQualityOrderReturn/list.htm\')"><img src="resource/images/two.png" class="twoimg">待质检退单</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderReturnStorageList" onclick="jumpPage(\'unStorageOrderReturn/list.htm\')"><img src="resource/images/two.png" class="twoimg">待入库退单</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';
	
	leftHtml += '<ul class="leftnavbar leftnavbar3">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>财务结算</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">'; 
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderSettleList" onclick="jumpPage(\'unSettlementOrder/list.htm\')"><img src="resource/images/two.png" class="twoimg">待结算订单</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#orderReturnSettleList" onclick="jumpPage(\'unSettlementOrderReturn/list.htm\')"><img src="resource/images/two.png" class="twoimg">待结算退单</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';
	
	leftHtml += '<ul class="leftnavbar leftnavbar3">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>促销方案活动</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">';
	leftHtml += '<li style="display:none;" hxauthmenu="4#ruleList" onclick="jumpPage(\'ruleInfo/rule_list.htm\')"><img src="resource/images/two.png" class="twoimg">促销方案列表</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';
	
	leftHtml += '<ul class="leftnavbar leftnavbar3">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>cps导出</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">';
	leftHtml += '<li style="display:none;" hxauthmenu="4#everyDaySalse" onclick="jumpPage(\'orderInfo/everyDaySalse.htm\')"><img src="resource/images/two.png" class="twoimg">每日销售数据</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#goodsSales" onclick="jumpPage(\'orderInfo/goodsSales.htm\')"><img src="resource/images/two.png" class="twoimg">商品销售清单</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="4#comminssionExport" onclick="jumpPage(\'orderInfo/comminssionExport.htm\')"><img src="resource/images/two.png" class="twoimg">佣金计算</li>';
	leftHtml += '</ul>';
	leftHtml += '</ul>';
	
    leftHtml += '<ul class="leftnavbar leftnavbar4">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>内容管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">'; 
	leftHtml += '<li style="display:none;" hxauthmenu="3#contentEdit" onclick="jumpPage(\'page/content_edit.htm\')"><img src="resource/images/two.png" class="twoimg">内容编辑</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="3#channelList" onclick="jumpPage(\'page/channelList.htm\')"><img src="resource/images/two.png" class="twoimg">子频道列表</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="3#channelAdd" onclick="jumpPage(\'page/channel.htm\')"><img src="resource/images/two.png" class="twoimg">子频道新增</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="3#extCategorySettingList"onclick="jumpPage(\'extCategorySetting/list.htm\')"><img src="resource/images/two.png" class="twoimg">分类设置</li>';
	leftHtml += '</ul>';
    leftHtml += '</ul>';
    
    leftHtml += '<ul class="leftnavbar leftnavbar4">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>资源管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">'; 
	leftHtml += '<li style="display:none;" hxauthmenu="3#mediaList" onclick="jumpPage(\'page/media_list.htm\')"><img src="resource/images/two.png" class="twoimg">资源列表</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="3#mediaAdd" onclick="jumpPage(\'page/media_add.htm\')"><img src="resource/images/two.png" class="twoimg">新建资源</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="3#mediaRecycle" onclick="jumpPage(\'page/mediaRecycle.htm\')"><img src="resource/images/two.png" class="twoimg">资源回收站</li>';
    leftHtml += '</ul>';
    leftHtml += '</ul>';
    
    leftHtml += '<ul class="leftnavbar leftnavbar4">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>优惠券管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">';
	leftHtml += '<li style="display:none;" hxauthmenu="3#couponLotList" onclick="jumpPage(\'coupon/couponLotList.htm\')"><img src="resource/images/two.png" class="twoimg">优惠券信息</li>';
	leftHtml += '</ul>';
    leftHtml += '</ul>';
    
    leftHtml += '<ul class="leftnavbar leftnavbar4">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>关键字管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">';
	leftHtml += '<li style="display:none;" hxauthmenu="3#keyWordList" onclick="jumpPage(\'keywordsInfo/list.htm\')"><img src="resource/images/two.png" class="twoimg">关键字信息</li>';
	leftHtml += '</ul>';
    leftHtml += '</ul>';

    leftHtml += '<ul class="leftnavbar leftnavbar4">';
	leftHtml += '<li class="active"><img class="firstMenuLogo" src="resource/images/setting.png" width="20"><span>公告管理</span><img src="resource/images/ddn.png" class="slideleft"></li>';
	leftHtml += '<div style="clear:both;"></div>';
	leftHtml += '<ul class="hideul">';
	leftHtml += '<li style="display:none;" hxauthmenu="3#noticeList" onclick="jumpPage(\'webArticle/list.htm\')"><img src="resource/images/two.png" class="twoimg">公告信息</li>';
	leftHtml += '<li style="display:none;" hxauthmenu="3#noticeAdd" onclick="jumpPage(\'webArticle/webArticle_add.htm\')"><img src="resource/images/two.png" class="twoimg">新建公告</li>';
	leftHtml += '</ul>';
    leftHtml += '</ul>';
    
	leftHtml += '</div>';
	leftHtml += '</div>';
	leftHtml += '<div class="leftimgbottom"></div>';

	$('.storemanageleft').html(leftHtml);
	
    jQuery.requestJson(url, function(resdata){
        if(resdata.ok){
            var data=resdata.data;
            var len=data.length;
            for(var i=0;i<len;i++){
                var menucode=data[i].menuCode;
                $("[hxauthmenu='"+menucode+"']").show();
            }
            $(".hideul>li").filter(function() {
                return $(this).css('display') != 'none';
            }).eq(0).click();
        }
    }, ''); 
			
	//左边菜单收缩
	$('.leftcon>ul>li').click(function(){
		$(this).parent().children('ul').slideDown(100);
		$(this).parent().siblings().children('ul').slideUp(100);
	});
	
	$(".hideul>li").click(function(){
		var leftnavbar = $(this).closest(".leftnavbar")
			,num1 = leftnavbar[0].className.replace(/[^\d]/g,"")
			,num2 = $(".leftnavbar" + num1).index($(this).closest(".leftnavbar" + num1)) + 1
			,num3 = $(this).index() + 1;
		window.parent.leftMenuIndex = num1 + "-" + num2 + "-" + num3;
		chageMenu();
	});
});

function jumpPage(url){
	parent.window.frames['mainFrame'].location.replace(url);
}

function jumpRulePage(url){
	parent.window.frames['mainFrame'].location.replace("http://" + rule_url + "/" + url);
}

function chageMenu(){
	//当前页面左边菜单栏高亮显示
	var leftMenuIndex = window.parent.leftMenuIndex;	//获取页面左侧序号
	var leftMenuIndexArr = leftMenuIndex.split('-');
	var leftMenuGrade1 = parseInt(leftMenuIndexArr[0]);	//一级菜单序号
	var leftMenuGrade2 = parseInt(leftMenuIndexArr[1]) -1;	//二级菜单序号
	var leftMenuGrade3 = parseInt(leftMenuIndexArr[2]) -1;	//二级菜单序号
	
	$('.leftnavbar').hide();
	$('.leftnavbar'+leftMenuGrade1).show(); //对应的当前页class菜单显示
	$('.leftnavbar'+leftMenuGrade1+' .hideul').hide();
	$('.leftnavbar'+leftMenuGrade1+':eq('+leftMenuGrade2+')>.hideul').show();
	$('.leftnavbar .hit').removeClass("hit");
	$('.leftnavbar .hideulActive').removeClass("hideulActive");
	$('.leftnavbar'+leftMenuGrade1+'>li').addClass('hit'); //当前页一级菜单高亮
	
	return $('.leftnavbar'+leftMenuGrade1+':eq('+leftMenuGrade2+')>.hideul>li:eq('+leftMenuGrade3+')').addClass('hideulActive');	//当前页二级菜单高亮显示
}
