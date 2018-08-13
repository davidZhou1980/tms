/*
 * location.js
 * author:yulu
 * 地址共通
 */

/*
 * param: 
 * String:provinceId,cityId,distinctId
 * boolean:autoLoad
 * String:actionUrl
 * user_proviceId,user_cityId,user_districtId：需要加载的user的地区信息
 * spanId :autoLoad为true时 将省市区选中的文本值放到span内
 * 
 */
function HXLocation3(provinceId
		,cityId
		,districtId
		,user_provinceId
		,user_cityId
		,user_districtId
		,actionUrl
		,autoLoad
		,spanId
		){
	HXLocation3.prototype.provinceId=provinceId;
	HXLocation3.prototype.cityId=cityId;
	HXLocation3.prototype.districtId=districtId;
	HXLocation3.prototype.autoLoad=autoLoad;
	HXLocation3.prototype.actionUrl=actionUrl;
	HXLocation3.prototype.user_provinceId=user_provinceId;
	HXLocation3.prototype.user_cityId=user_cityId;
	HXLocation3.prototype.user_districtId=user_districtId;
	HXLocation3.prototype.spanId=spanId;
}

HXLocation3.prototype.load_region=function(region_id,region_type){
	    //alert("actionUrl:"+HXLocation3.prototype.actionUrl);
		var url=HXLocation3.prototype.actionUrl+"?region_id="+region_id+"&region_type="+region_type;
	    jQuery.requestJson(url, HXLocation3.prototype.load_region_callback, '');
	}
	
HXLocation3.prototype.load_region_callback=function(resdata){
		 //var location=this;
		 var region_type=resdata.stateCode;
		 var data=resdata.data;
		 var len=data.length;
		 var tr_tp="<option value='{regeionId}'>{regionName}</option>";
		 var add_html="<option value='0'>请选择</option>"
		 for(var i=0;i<len;i++){
		   var obj=data[i];
		   add_html+=(tr_tp.replace("{regeionId}",obj.regionId).replace("{regionName}",obj.regionName) );
		 }
		 
		  $("#"+region_type).html(add_html);
		 //省，市，区重新选择
		 if(region_type==HXLocation3.prototype.provinceId){
		   
		   $("#"+HXLocation3.prototype.cityId).html("<option value='0'>请选择</option>");
		   $("#"+HXLocation3.prototype.districtId).html("<option value='0'>请选择</option>");
		 }
		 
		 //市，区重新选择
		  if(region_type==HXLocation3.prototype.cityId){
		   $("#"+HXLocation3.prototype.districtId).html("<option value='0'>请选择</option>");
		 }
		 
		 //检查是否需要重新加载用户已经选择的内容
		 
		 if(HXLocation3.prototype.autoLoad){
		    if( HXLocation3.prototype.user_provinceId!=0 && region_type==HXLocation3.prototype.provinceId){
		      $("#"+HXLocation3.prototype.provinceId).val(HXLocation3.prototype.user_provinceId);
		      HXLocation3.prototype.load_city();
		    }
		    if(HXLocation3.prototype.user_provinceId!=0 && HXLocation3.prototype.user_cityId!=0 && region_type==HXLocation3.prototype.cityId){
		      $("#"+HXLocation3.prototype.cityId).val(HXLocation3.prototype.user_cityId);
		      HXLocation3.prototype.load_district();
		    }
		    if(region_type==HXLocation3.prototype.districtId){
		      $("#"+HXLocation3.prototype.districtId).val(HXLocation3.prototype.user_districtId);
		    }
		    
		    var p =$("#"+HXLocation3.prototype.provinceId).find("option:selected").text();
		    var c = $("#"+HXLocation3.prototype.cityId).find("option:selected").text();
		    var d = $("#"+HXLocation3.prototype.districtId).find("option:selected").text();
		    if(p=="请选择"){
		    	p="";
		    }
		    if(c=="请选择"){
		    	c="";
		    }
		    if(d=="请选择"){
		    	d="";
		    }
		    $("#"+HXLocation3.prototype.spanId).html(p+c+d);
		  }
	}
	
	//加载省信息
	HXLocation3.prototype.load_province=function(){
		HXLocation3.prototype.load_region(0,HXLocation3.prototype.provinceId);
	}

	//加载市信息
	HXLocation3.prototype.load_city=function(){
		HXLocation3.prototype.load_region($("#"+HXLocation3.prototype.provinceId).val(),HXLocation3.prototype.cityId);
	}

	//加载区信息
	HXLocation3.prototype.load_district=function(){
		HXLocation3.prototype.load_region($("#"+HXLocation3.prototype.cityId).val(),HXLocation3.prototype.districtId);
	}
	
	//城市不可选
	HXLocation3.prototype.disableCity=function(){
		 $("#"+HXLocation3.prototype.cityId).html("<option value='0'>请选择</option>");
	}
	
	//区不可选
	HXLocation3.prototype.disableDistrict=function(){
		 $("#"+HXLocation3.prototype.districtId).html("<option value='0'>请选择</option>");
	}
	
	HXLocation3.prototype.init=function(){
		//注册select 下拉事件
		$("#"+HXLocation3.prototype.provinceId).change(function(){
			//如果省为0，市和区为初始状态，只有可选择0
				if(parseInt($("#"+HXLocation3.prototype.provinceId).val())==0){
					HXLocation3.prototype.disableCity();
					HXLocation3.prototype.disableDistrict();
				}else{
				HXLocation3.prototype.load_city();
				}
	        });
	        
	    $("#"+HXLocation3.prototype.cityId).change(function(){
	    	//如果市为0，区为初始状态，只有可选择0
		    	if(parseInt($("#"+HXLocation3.prototype.cityId).val())==0){
					HXLocation3.prototype.disableDistrict();
				}else{
					HXLocation3.prototype.load_district();
				}	
	        });
	
	        HXLocation3.prototype.load_province(); //加载省信息   
	}
