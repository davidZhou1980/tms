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
function HXLocation2(provinceId
		,cityId
		,districtId
		,user_provinceId
		,user_cityId
		,user_districtId
		,actionUrl
		,autoLoad
		,spanId
		){
	HXLocation2.prototype.provinceId=provinceId;
	HXLocation2.prototype.cityId=cityId;
	HXLocation2.prototype.districtId=districtId;
	HXLocation2.prototype.autoLoad=autoLoad;
	HXLocation2.prototype.actionUrl=actionUrl;
	HXLocation2.prototype.user_provinceId=user_provinceId;
	HXLocation2.prototype.user_cityId=user_cityId;
	HXLocation2.prototype.user_districtId=user_districtId;
	HXLocation2.prototype.spanId=spanId;
}

HXLocation2.prototype.load_region=function(region_id,region_type){
	    //alert("actionUrl:"+HXLocation2.prototype.actionUrl);
		var url=HXLocation2.prototype.actionUrl+"?region_id="+region_id+"&region_type="+region_type;
	    jQuery.requestJson(url, HXLocation2.prototype.load_region_callback, '');
	}
	
HXLocation2.prototype.load_region_callback=function(resdata){
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
		 if(region_type==HXLocation2.prototype.provinceId){
		   
		   $("#"+HXLocation2.prototype.cityId).html("<option value='0'>请选择</option>");
		   $("#"+HXLocation2.prototype.districtId).html("<option value='0'>请选择</option>");
		 }
		 
		 //市，区重新选择
		  if(region_type==HXLocation2.prototype.cityId){
		   $("#"+HXLocation2.prototype.districtId).html("<option value='0'>请选择</option>");
		 }
		 
		 //检查是否需要重新加载用户已经选择的内容
		 
		 if(HXLocation2.prototype.autoLoad){
		    if( HXLocation2.prototype.user_provinceId!=0 && region_type==HXLocation2.prototype.provinceId){
		      $("#"+HXLocation2.prototype.provinceId).val(HXLocation2.prototype.user_provinceId);
		      HXLocation2.prototype.load_city();
		    }
		    if(HXLocation2.prototype.user_provinceId!=0 && HXLocation2.prototype.user_cityId!=0 && region_type==HXLocation2.prototype.cityId){
		      $("#"+HXLocation2.prototype.cityId).val(HXLocation2.prototype.user_cityId);
		      HXLocation2.prototype.load_district();
		    }
		    if(region_type==HXLocation2.prototype.districtId){
		      $("#"+HXLocation2.prototype.districtId).val(HXLocation2.prototype.user_districtId);
		    }
		    
		    var p =$("#"+HXLocation2.prototype.provinceId).find("option:selected").text();
		    var c = $("#"+HXLocation2.prototype.cityId).find("option:selected").text();
		    var d = $("#"+HXLocation2.prototype.districtId).find("option:selected").text();
		    if(p=="请选择"){
		    	p="";
		    }
		    if(c=="请选择"){
		    	c="";
		    }
		    if(d=="请选择"){
		    	d="";
		    }
		    $("#"+HXLocation2.prototype.spanId).html(p+c+d);
		  }
	}
	
	//加载省信息
	HXLocation2.prototype.load_province=function(){
		HXLocation2.prototype.load_region(0,HXLocation2.prototype.provinceId);
	}

	//加载市信息
	HXLocation2.prototype.load_city=function(){
		HXLocation2.prototype.load_region($("#"+HXLocation2.prototype.provinceId).val(),HXLocation2.prototype.cityId);
	}

	//加载区信息
	HXLocation2.prototype.load_district=function(){
		HXLocation2.prototype.load_region($("#"+HXLocation2.prototype.cityId).val(),HXLocation2.prototype.districtId);
	}
	
	//城市不可选
	HXLocation2.prototype.disableCity=function(){
		 $("#"+HXLocation2.prototype.cityId).html("<option value='0'>请选择</option>");
	}
	
	//区不可选
	HXLocation2.prototype.disableDistrict=function(){
		 $("#"+HXLocation2.prototype.districtId).html("<option value='0'>请选择</option>");
	}
	
	HXLocation2.prototype.init=function(){
		//注册select 下拉事件
		$("#"+HXLocation2.prototype.provinceId).change(function(){
			//如果省为0，市和区为初始状态，只有可选择0
				if(parseInt($("#"+HXLocation2.prototype.provinceId).val())==0){
					HXLocation2.prototype.disableCity();
					HXLocation2.prototype.disableDistrict();
				}else{
				HXLocation2.prototype.load_city();
				}
	        });
	        
	    $("#"+HXLocation2.prototype.cityId).change(function(){
	    	//如果市为0，区为初始状态，只有可选择0
		    	if(parseInt($("#"+HXLocation2.prototype.cityId).val())==0){
					HXLocation2.prototype.disableDistrict();
				}else{
					HXLocation2.prototype.load_district();
				}	
	        });
	
	        HXLocation2.prototype.load_province(); //加载省信息   
	}
