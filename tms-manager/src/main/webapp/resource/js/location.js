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
 */
function HXLocation(provinceId
		,cityId
		,districtId
		,user_provinceId
		,user_cityId
		,user_districtId
		,actionUrl
		,autoLoad){
	HXLocation.prototype.provinceId=provinceId;
	HXLocation.prototype.cityId=cityId;
	HXLocation.prototype.districtId=districtId;
	HXLocation.prototype.autoLoad=autoLoad;
	HXLocation.prototype.actionUrl=actionUrl;
	HXLocation.prototype.user_provinceId=user_provinceId;
	HXLocation.prototype.user_cityId=user_cityId;
	HXLocation.prototype.user_districtId=user_districtId;
}

HXLocation.prototype.load_region=function(region_id,region_type){
	    //alert("actionUrl:"+HXLocation.prototype.actionUrl);
		var url=HXLocation.prototype.actionUrl+"?region_id="+region_id+"&region_type="+region_type;
	    jQuery.requestJson(url, HXLocation.prototype.load_region_callback, '');
	}
	
HXLocation.prototype.load_region_callback=function(resdata){
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
		 if(region_type==HXLocation.prototype.provinceId){
		   
		   $("#"+HXLocation.prototype.cityId).html("<option value='0'>请选择</option>");
		   $("#"+HXLocation.prototype.districtId).html("<option value='0'>请选择</option>");
		 }
		 
		 //市，区重新选择
		  if(region_type==HXLocation.prototype.cityId){
		   $("#"+HXLocation.prototype.districtId).html("<option value='0'>请选择</option>");
		 }
		 
		 //检查是否需要重新加载用户已经选择的内容
		 
		 if(HXLocation.prototype.autoLoad){
		    if( HXLocation.prototype.user_provinceId!=0 && region_type==HXLocation.prototype.provinceId){
		      $("#"+HXLocation.prototype.provinceId).val(HXLocation.prototype.user_provinceId);
		      HXLocation.prototype.load_city();
		    }
		    if(HXLocation.prototype.user_provinceId!=0 && HXLocation.prototype.user_cityId!=0 && region_type==HXLocation.prototype.cityId){
		      $("#"+HXLocation.prototype.cityId).val(HXLocation.prototype.user_cityId);
		      HXLocation.prototype.load_district();
		    }
		    if(region_type==HXLocation.prototype.districtId){
		      $("#"+HXLocation.prototype.districtId).val(HXLocation.prototype.user_districtId);
		    }
		  }
	}
	
	//加载省信息
	HXLocation.prototype.load_province=function(){
		HXLocation.prototype.load_region(0,HXLocation.prototype.provinceId);
	}

	//加载市信息
	HXLocation.prototype.load_city=function(){
		HXLocation.prototype.load_region($("#"+HXLocation.prototype.provinceId).val(),HXLocation.prototype.cityId);
	}

	//加载区信息
	HXLocation.prototype.load_district=function(){
		HXLocation.prototype.load_region($("#"+HXLocation.prototype.cityId).val(),HXLocation.prototype.districtId);
	}
	
	//城市不可选
	HXLocation.prototype.disableCity=function(){
		 $("#"+HXLocation.prototype.cityId).html("<option value='0'>请选择</option>");
	}
	
	//区不可选
	HXLocation.prototype.disableDistrict=function(){
		 $("#"+HXLocation.prototype.districtId).html("<option value='0'>请选择</option>");
	}
	
	HXLocation.prototype.init=function(){
		//注册select 下拉事件
		$("#"+HXLocation.prototype.provinceId).change(function(){
			//如果省为0，市和区为初始状态，只有可选择0
				if(parseInt($("#"+HXLocation.prototype.provinceId).val())==0){
					HXLocation.prototype.disableCity();
					HXLocation.prototype.disableDistrict();
				}else{
				HXLocation.prototype.load_city();
				}
	        });
	        
	    $("#"+HXLocation.prototype.cityId).change(function(){
	    	//如果市为0，区为初始状态，只有可选择0
		    	if(parseInt($("#"+HXLocation.prototype.cityId).val())==0){
					HXLocation.prototype.disableDistrict();
				}else{
					HXLocation.prototype.load_district();
				}	
	        });
	
	        HXLocation.prototype.load_province(); //加载省信息   
	}
