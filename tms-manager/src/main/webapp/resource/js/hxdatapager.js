/*
 * 列表list分页共通
 * author:yulu
 */

/*
 * searchActionURL: 后台查询操作action，统一返回ajax格式 
 * 					count:返回的记录条数 
 * 					data:数据
 * 					nowpage:当前页
 * 					allcount: 记录总数 (用于分页)
 * searchActionCallBack: 查询结果后的回调函数名称，用于查询后加载数据
 * pagerdivid: html上的分页divID
 * formid: 查询需要的表单 id
 * nowpage:当前页码ID
 * eachpageCountid： 每页记录条数数量ID
 * type: 可选择 button 或 link 
 */
function HXDataPager(searchActionURL,
		searchActionCallBack,
		pagerdivid,
		formid,
		nowpageid,
		eachpageCountid,
		type){
	HXDataPager.prototype.searchActionURL=searchActionURL;
	HXDataPager.prototype.searchActionCallBack=searchActionCallBack;
	HXDataPager.prototype.pagerdivid=pagerdivid;
	HXDataPager.prototype.formid=formid;
	HXDataPager.prototype.nowpageid=nowpageid;
	HXDataPager.prototype.eachpageCountid=eachpageCountid;
	HXDataPager.prototype.type=type;
	HXDataPager.prototype.allcount=0; //暂时不设置
}

/*
 * param: 
 * form中的参数需要：
 *      nowpage: 当前页码
 * 		eachpageCount:每页的记录条数,
 * 		查询字段， 
 * 		排序字段，
 * 		排序方式
 */
HXDataPager.prototype.doSearch=function(){
	var param=$("#"+HXDataPager.prototype.formid).serializeObject();
	var url=HXDataPager.prototype.searchActionURL;
    jQuery.requestJson(url, HXDataPager.prototype.doSearchCallBack, param);
}

HXDataPager.prototype.doSearchCallBack=function(resdata){
	//调用回调函数显示内容
	HXDataPager.prototype.searchActionCallBack(resdata);
	
	//生成分页的html
	//从resdata中获取最大数据
	var allcount=resdata.allcount;
	//将分页的html加载到页面中
	HXDataPager.prototype.allcount=allcount;
	
	var datapagerhtml=HXDataPager.prototype.getDataPagerHTML();
	
	//没有数据，分页不显示
	if(HXDataPager.prototype.allcount==0){
		$("#"+HXDataPager.prototype.pagerdivid).html("没有数据");
	}else{
		$("#"+HXDataPager.prototype.pagerdivid).html(datapagerhtml);
	}
	
	
	//注册分页中的button 的click事件
	HXDataPager.prototype.addBtnEvent();
}

HXDataPager.prototype.DataPagerHTMLTP="<button id='hxdatapaper_btn_first'>首页</button><button id='hxdatapaper_btn_pre'>上一页</button> NOWPAGE  /  MAXPAGE <button id='hxdatapaper_btn_next' >下一页</button><button id='hxdatapaper_btn_last'>末页</button>";

HXDataPager.prototype.addBtnEvent=function(){
	//注册四个按钮的点击事件
	//首页
	$("#hxdatapaper_btn_first").click(function(){
		//修改当前页码 ，页码从第一页开始
		$("#"+HXDataPager.prototype.nowpageid).val(1);
		HXDataPager.prototype.doSearch();
	});
	
	//末页
	$("#hxdatapaper_btn_last").click(function(){
		//修改当前页码 ，页码从第一页开始
		var maxpage=HXDataPager.prototype.getMaxpage(HXDataPager.prototype.allcount);
		$("#"+HXDataPager.prototype.nowpageid).val(maxpage);
		HXDataPager.prototype.doSearch();
	});
	
	//上一页
	$("#hxdatapaper_btn_pre").click(function(){
		//修改当前页码 ，页码从第一页开始
		//如果当前页码为1,点击就无效
		var nowpage=parseInt($("#"+HXDataPager.prototype.nowpageid).val());
		if(nowpage==1){
			return;
		}
		else{
		$("#"+HXDataPager.prototype.nowpageid).val(nowpage-1);
		HXDataPager.prototype.doSearch();
		}
	});
	
	//下一页
	$("#hxdatapaper_btn_next").click(function(){
		//如果当前页为最大页，无效
		var nowpage=parseInt($("#"+HXDataPager.prototype.nowpageid).val());
		
		var maxpage=HXDataPager.prototype.getMaxpage(HXDataPager.prototype.allcount);
		//alert("maxpage:"+maxpage);
		
		nowpage=parseInt(nowpage);
		maxpage=parseInt(maxpage);
		if(nowpage==maxpage || maxpage==0){
			return;
		}
		else{
		$("#"+HXDataPager.prototype.nowpageid).val(nowpage+1);
		HXDataPager.prototype.doSearch();
		}
	});
}

HXDataPager.prototype.getMaxpage=function(allcount){
	var nowpage=$("#"+HXDataPager.prototype.nowpageid).val();
	var eachpageCount=$("#"+HXDataPager.prototype.eachpageCountid).val();
	nowpage=parseInt(nowpage);
	eachpageCount=parseInt(eachpageCount);
	var maxpage=0;
	if(allcount%eachpageCount==0){
		maxpage=allcount/eachpageCount;
	}else{
		maxpage=Math.floor(allcount/eachpageCount)+1;
	}
	return maxpage;
}

//生成分页的HTML，可以使用button 或 link
HXDataPager.prototype.getDataPagerHTML=function(){
	
	var nowpage=$("#"+HXDataPager.prototype.nowpageid).val();
	var maxpage=HXDataPager.prototype.getMaxpage(HXDataPager.prototype.allcount);
	//显示 格式如下  首页  上一页    当前页/总页数  下一页   末页   跳转____页   跳转
	var datapagerhtml=HXDataPager.prototype.DataPagerHTMLTP.replace("NOWPAGE",nowpage).replace("MAXPAGE",maxpage);
	
	return datapagerhtml;
}