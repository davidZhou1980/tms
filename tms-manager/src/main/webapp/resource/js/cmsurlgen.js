/*
 * cms URL 生成方法
 * param: 业务类型 ,业务ID， 附加资源的oid, 资源的文字，
 * web_page_div_id；当前所在divid，用于判断是否自动生成 productList/search.htm?roomType=1 使用
 */
function get_cms_url(object_type,object_id,oid,sp_label,web_page_div_id){
	//服务器部署时，修改为http://www.hxshop.com/
	var url_prefix=URL_PREFIX;
	oid=parseInt(oid);
	//如果是品牌,返回 brand/brandGoodsShop.htm?brandId=19
	if(object_type=="brand"){
		return  url_prefix+"brand/brandGoodsShop.htm?brandId="+object_id;
	}
	
	//如果是品牌特卖，返回  brand/brandGoodsShop.htm?brandId=19&oid=11
	if(object_type=="brandsell"){
		
		if(oid!=0){
			return url_prefix+"brand/brandGoodsShop.htm?brandId="+object_id+"&oid="+oid;
		}else{
			return url_prefix+"brand/brandGoodsShop.htm?brandId="+object_id;
		}
	}
	
	//如果是混场特卖，返回  brand/brandGoodsShop.htm?tagId=20&oid=11
	if(object_type=="mixsell"){
		if(oid!=0){
			return url_prefix+"brand/brandGoodsShop.htm?tagId="+object_id+"&oid="+oid;
		}else{
			return url_prefix+"brand/brandGoodsShop.htm?tagId="+object_id;
		}
	}
	
	//如果是商品，返回  productGoods/productGoodsInit.htm?id=207
	if(object_type=="productgoods"){
		return url_prefix+"productGoods/productGoodsInit.htm?id="+object_id;
	}
	
	//如果是产品
	if(object_type=="product"){
		return url_prefix+"productGoods/productInit.htm?id="+object_id;
	}
	
	//如果是 F链接 更多 productList/search.htm?roomType=楼层
	if(object_type=="notchoose"){
		//如果是 F1 链接名称 非更多  productList/search.htm?keyWord=书房
		if(is_index_link_div(web_page_div_id)){
			//如果label不是更多，设置关键字
			if(sp_label!="更多"){
				return url_prefix+"productList/search.htm?keyWord="+sp_label;
			}else{
				//如果label是更多，设置搜索楼层参数
				//获取层数
				var floor=get_index_floor(web_page_div_id);
				return url_prefix+"productList/search.htm?roomType="+floor;
			}
			
		}
	}
	
	//如果是子频道
	if(object_type=="channel"){
		return url_prefix+"brand/channel.htm?id="+object_id;
	}
	
	if(object_type=="extcategory"){
		return url_prefix+"productList/direct.htm?categoryId="+object_id;
	}
	//如果是非其他，不返回任何内容
	return url_prefix+"productList/search.htm?keyWord="+sp_label;
}

//根据传入的web_page_div_id判断是否是 链接设置页面，如果是，需要自动填写search.htm
function is_index_link_div(web_page_div_id){
	web_page_div_id=parseInt(web_page_div_id);
	if(web_page_div_id== 1003 
			|| web_page_div_id== 1007
			|| web_page_div_id== 1011 
			|| web_page_div_id== 1015 
			|| web_page_div_id== 1019 
			|| web_page_div_id== 1023 
			|| web_page_div_id== 1027 ){
		return true;
	}
	return false;
}

//根据传入的web_page_div_id，判断所在楼层
function get_index_floor(web_page_div_id){
	//1003 return 1  1007 return 2
	web_page_div_id=parseInt(web_page_div_id);
	return (web_page_div_id-1003)/4+1;
}

//根据object_type 决定编码ID是否可以选择
function div_object_id_choose_canshow(object_type){
	if(object_type=="brand" 
		|| object_type=="brandsell"
		|| object_type=="mixsell"
		|| object_type=="productgoods"
		|| object_type=="product"
		|| object_type=="channel"
		|| object_type=="extcategory"){
		return true;
	}else{
		return false;
	}
}

//根据object_type 决定
function cms_show_sp_object_code(object_type){
	if(object_type=="brand" || object_type=="brandsell"){
		$("#sp_object_code").html("品牌编码");
		return;
	}
	if(object_type=="mixsell"){
		$("#sp_object_code").html("标签编码");
		return;
	}
	if(object_type=="productgoods"){
		$("#sp_object_code").html("商品编码");
		return;
	}
	if(object_type=="product"){
		$("#sp_object_code").html("产品编码");
		return;
	}
	if(object_type=="channel"){
		$("#sp_object_code").html("子频道编码");
		return;
	}
	
	if(object_type=="extcategory"){
		$("#sp_object_code").html("虚拟分类编码");
		return;
	}
}

//隐藏显示 pop_div  pop_div_tag  pop_div_product  pop_div_brand
function cms_pop_div_show(object_type){
	$("#pop_div_tag").hide();
	$("#pop_div_product").hide();
	$("#pop_div_brand").hide();
	$("#pop_div_channel").hide();
	$("#pop_div_extcategory").hide();
	
	if(object_type=="brand" || object_type=="brandsell"){
		$("#pop_div_brand").show();
		return;
	}
	if(object_type=="mixsell"){
		$("#pop_div_tag").show();
		return;
	}
	if(object_type=="productgoods"){
		$("#pop_div_product").show();
		return;
	}
	
	if(object_type=="product"){
		return;
	}
	
	if(object_type=="channel"){
		$("#pop_div_channel").show();
		return;
	}
	
	if(object_type=="extcategory"){
		$("#pop_div_extcategory").show();
		return;
	}
}