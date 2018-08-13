/*
 * author: yulu
 * usage:用于替换数据库中查询出的码表的值与显示的值
 * 此文件的内容应与数据库码表配置同步，不然显示会错误
 */

var cmssystem_code_media_type_code_arr=["notchoose","brand","brandsell","mixsell","productgoods","product","resource"];
var cmssystem_code_media_type_value_arr=["未选择","品牌","品牌特卖","多品牌特卖","商品","产品","资源"];


var cmssystem_code_object_type_code_arr=["image","txt","html"];
var cmssystem_code_object_type_value_arr=["图片","文字","子网页"];


get_cmssystemcode_media_type=function(code){
	//cmssystem_code_media_type_code_arr 找，找不到返回 空
	var len=cmssystem_code_media_type_code_arr.length;
	for(var i=0;i<len;i++){
		if(cmssystem_code_media_type_code_arr[i]==code){
			return cmssystem_code_media_type_value_arr[i];
		}
	}	
	return "";
};

get_cmssystemcode_object_type=function(code){
	var len=cmssystem_code_object_type_code_arr.length;
	for(var i=0;i<len;i++){
		if(cmssystem_code_object_type_code_arr[i]==code){
			return cmssystem_code_object_type_value_arr[i];
		}
	}	
	return "";
};

get_cmssystemcode_media_type_selecthtml=function(){
	 var len=cmssystem_code_media_type_code_arr.length;
	 var option_html_tr_tp='<option value="{codeValueCode}">{codeValueName}</option>';
	 var option_html="";
	 for(var i=0;i<len;i++){
	        option_html+=option_html_tr_tp.replace("{codeValueCode}",cmssystem_code_media_type_code_arr[i]).replace("{codeValueName}",cmssystem_code_media_type_value_arr[i]);
	 }
	 return option_html;
};

get_cmssystemcode_object_type_selecthtml=function(){
	 var len=cmssystem_code_object_type_code_arr.length;
	 var option_html_tr_tp='<option value="{codeValueCode}">{codeValueName}</option>';
	 var option_html="";
	 for(var i=0;i<len;i++){
	        option_html+=option_html_tr_tp.replace("{codeValueCode}",cmssystem_code_object_type_code_arr[i]).replace("{codeValueName}",cmssystem_code_object_type_value_arr[i]);
	 }
	 return option_html;
};



