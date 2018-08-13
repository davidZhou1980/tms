/*
 * hx模板js,实现加载模板后事件注册，修改模板元素的功能
 * author:yulu
 * 
 */

function HXTp(){}

//加载模板的提示信息
HXTp.prototype.init=function(){
  //如果是链接，增加点击此处编辑链接的按钮
  $("[hxtp='link']").each(function(){
  	$(this).html("修改链接");
    $(this).click(function(){
    	alert("click me!")
    });
  });

  $("[hxtp='istp']").each(function(){
	var hxobjpos=$(this).attr("hxobjpos");
	var divid=$(this).attr("divid");
  	$(this).html("DIV:"+divid+"修改,顺序"+hxobjpos);
  	//弹出高宽
  	var width=$(this).css("width");
  	var height=$(this).css("height");
  	console.log("width:"+width+" height:"+height);
  	// background-image: url(bgimage.gif);
  	//$(this).css("background-image","url(e.jpg)")
  	
    $(this).click(function(){
    	//提示，确定要使用选择的media替换该元素块吗？
    	if(confirm("确定要使用选择的div吗？")){
    		var len=arr_div_filelist.length;
    		//alert("len:"+len);
    		/*if(imgurl==""){
    			alert("请先选择media元素");
    		}else{
    			//alert("替换");
    			//
    			//$(this).html
    			var newhtml='<a  title="title"><img src="'+imgurl+'" alt="title"></a>';
    			$(this).html(newhtml);
    		}*/
    		if(len==0){
    			alert("请先选择div");
    			return;
    		}
    		var divid=$(this).attr("divid");
    		//alert(divid);
    		replace_pagediv(divid,arr_div_filelist);
    	}
    });
  });

  $("[hxtp='product']").each(function(){
  	$(this).html("修改商品");
  	// background-image: url(bgimage.gif);
  	$(this).css("background-image","url(e.jpg)")
    $(this).click(function(){
    	alert("click me!")
    });
  });

  $("[hxtp='type']").each(function(){
  	$(this).html("修改类型");
  	// background-image: url(bgimage.gif);
  	$(this).css("background-image","url(e.jpg)")
    $(this).click(function(){
    	alert("click me!")
    });
  });
  
  
  $("[hxtp='istp_a']").each(function(){
		var hxobjpos=$(this).attr("hxobjpos");
		var divid=$(this).attr("divid");
	  	$(this).html("LINK:"+divid+"修改,顺序"+hxobjpos);
	    $(this).click(function(){
	    	if(confirm("确定要使用选择的LINKE吗？")){
	    		var len=arr_div_filelist.length;
	    		if(len==0){
	    			alert("请先选择div");
	    			return;
	    		}
	    		var divid=$(this).attr("divid");
	    		replace_pagelink(divid,arr_div_urllist,arr_div_labellist);
	    	}
	    });
	  });
  
  //banner 修改
  $("[hxtp='istp_banner']").each(function(){
		var hxobjpos=$(this).attr("hxobjpos");
		var divid=$(this).attr("divid");
	  	$(this).html("BANNER:"+divid+"修改,顺序"+hxobjpos);
	    $(this).click(function(){
	    	if(confirm("确定要使用选择的BANNER吗？")){
	    		var len=arr_div_filelist.length;
	    		if(len==0){
	    			alert("请先选择div");
	    			return;
	    		}
	    		var divid=$(this).attr("divid");
	    		//replace_pagelink(divid,arr_div_urllist,arr_div_labellist);
	    		replace_banner(divid,arr_div_filelist,arr_div_urllist);
	    	}
	    });
	  });
  
  //获取page信息
  $("[hxtp='istp_page']").each(function(){
	  var name=$(this).attr("hxtp_name");
	  alert("page: name:"+name);
  })
  
  //获取div信息
  $("[hxtp='istp_div']").each(function(){
	  var name=$(this).attr("hxtp_name");
	  alert("div: name:"+name);
  })

}


//替换div
replace_pagediv=function(divid,arr_div_filelist){
	//依次找到div的内容，修改掉img的src即可
	var len=arr_div_filelist.length;
	for(var i=0;i<len;i++){
		var pos=i+1;
		var newhtml='<img src="'+arr_div_filelist[i]+'" alt="title">';
	    $("[divid='"+divid+"'][hxobjpos='"+pos+"']").html(newhtml);
	}
}

//替换link
replace_pagelink=function(divid,arr_link_urllist,arr_div_labellist){
	//依次找到link的内容，修改掉href即可
	var len=arr_div_filelist.length;
	for(var i=0;i<len;i++){
		var pos=i+1;
		//var newhtml='<img src="'+arr_div_filelist[i]+'" alt="title">';
	    $("[divid='"+divid+"'][hxobjpos='"+pos+"']").attr("href",arr_link_urllist[i]).html(arr_div_labellist[i]);
	}
}

//替换banner
replace_banner=function(divid,arr_div_filelist,arr_div_urllist){
	//banner 需要图片，url
	// <a href="" hxobjpos="1"  divid="200" hxtp="istp_banner" target="_blank"><img src="banner01.jpg" alt="" /></a>
	var len=arr_div_filelist.length;
	for(var i=0;i<len;i++){
		var pos=i+1;
		var newhtml='<img src="'+arr_div_filelist[i]+'" alt="title">';
		 $("[divid='"+divid+"'][hxobjpos='"+pos+"']").attr("href",arr_div_urllist[i]).html(newhtml);
	}
}