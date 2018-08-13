/*
 * hxdate.js
 * author:yulu
 * 日期选择共同
 */

/*
 * param: 
 * String:yearId,monthId,dayId
 * start_year  //年的最小值
 * end_year //年的最大值
 * user_year,user_month,user_day：需要加载的信息
 * boolean:autoLoad
   boolean: is_year_desc 年份是否为倒序
 */
function HXDate(yearId
		,monthId
		,dayId
		,user_year
		,user_month
		,user_day
		,start_year
		,end_year
		,autoLoad
		,is_year_desc){
	HXDate.prototype.yearId=yearId;
	HXDate.prototype.monthId=monthId;
	HXDate.prototype.dayId=dayId;
	HXDate.prototype.autoLoad=autoLoad;
	HXDate.prototype.user_year=user_year;
	HXDate.prototype.user_month=user_month;
	HXDate.prototype.user_day=user_day;
	HXDate.prototype.start_year=start_year;
	HXDate.prototype.end_year=end_year;	
	HXDate.prototype.autoLoad=autoLoad;
	HXDate.prototype.hasLoad=false; //只自动加载一次
	HXDate.prototype.is_year_desc=is_year_desc;   //年份是否倒序
}

HXDate.prototype.load_year=function(){
	 var tr_tp="<option value='{year_value}'>{year}</option>";
	 var add_html="<option value='0'>请选择</option>";
	
	 //年份升序
	 if(!HXDate.prototype.is_year_desc){
		 for(var i=HXDate.prototype.start_year;i<=HXDate.prototype.end_year;i++){
		   add_html+=(tr_tp.replace("{year}",i).replace("{year_value}",i) );
		 }
	}else{  //年份倒序

 		for(var i=HXDate.prototype.end_year;i>=HXDate.prototype.start_year;i--){
		   add_html+=(tr_tp.replace("{year}",i).replace("{year_value}",i) );
		 }
	}

	 $("#"+HXDate.prototype.yearId).html(add_html);
      
	 if(HXDate.prototype.autoLoad){
	  	$("#"+HXDate.prototype.yearId).val(HXDate.prototype.user_year);
	 }	
};

HXDate.prototype.load_month=function(){
	 var tr_tp="<option value='{month_value}'>{month}</option>";
	 var add_html="<option value='0'>请选择</option>";
	 for(var i=1;i<=12;i++){
	 	if(i<10){
	     add_html+=(tr_tp.replace("{month_value}","0"+i).replace("{month}","0"+i) );
	   }else{
	   	 add_html+=(tr_tp.replace("{month_value}",i).replace("{month}",i) );
	   }
	 }
	  $("#"+HXDate.prototype.monthId).html(add_html);	
	  if(HXDate.prototype.autoLoad){
	  	$("#"+HXDate.prototype.monthId).val(HXDate.prototype.user_month);
	 }	

	 HXDate.prototype.load_day();
};

HXDate.prototype.bigmonth=[1,3,5,7,8,10,12];
HXDate.prototype.smallmonth=[4,5,9,11];

HXDate.is_bigmonth=function(month){
	var len=HXDate.prototype.bigmonth.length;
	for(var i=0;i<len;i++){
		if(month==HXDate.prototype.bigmonth[i]){
			return true;
		}
	}
	return false;
};

HXDate.is_smallmonth=function(month){
	var len=HXDate.prototype.smallmonth.length;
	for(var i=0;i<len;i++){
		if(month==HXDate.prototype.smallmonth[i]){
			return true;
		}
	}
	return false;
};

HXDate.is_speicalyear=function(year){
	if ( (year%4==0&&year%100!=0)||year%400==0){
		return true;
	}else{
		return false;
	}
};


HXDate.prototype.load_day=function(){
	 var year=$("#"+HXDate.prototype.yearId).val();
	 var month=$("#"+HXDate.prototype.monthId).val();
	 var add_html="<option value='0'>请选择</option>";
	 //如果year和month有一个为0，就不加载
	 if(year==0 || month==0){
	 	 $("#"+HXDate.prototype.dayId).html(add_html);
	 	return;
	 }
	 var max_day=0;
	 //查看月是否为大月
	 if(HXDate.is_bigmonth(month)){
		 max_day=31;
	 }else{
		 if(HXDate.is_smallmonth(month)){
			 max_day=30;
		 }else{
			 if(HXDate.is_speicalyear(year)){
				 max_day=29;
			 }else{
				 max_day=28;
			 }
		 }
		 
	 }
	 
	 var tr_tp="<option value='{day_value}'>{day}</option>";
	 
	 for(var i=1;i<=max_day;i++){
	 	if(i<10){
	     add_html+=(tr_tp.replace("{day_value}","0"+i).replace("{day}","0"+i) );
	    }
	   else{
         add_html+=(tr_tp.replace("{day_value}",i).replace("{day}",i) );
	   }
	 }
	  $("#"+HXDate.prototype.dayId).html(add_html);	

	  if(HXDate.prototype.autoLoad && !HXDate.prototype.hasLoad){
	  	HXDate.prototype.hasLoad=true;
	  	$("#"+HXDate.prototype.dayId).val(HXDate.prototype.user_day);
	 }	
};
	
	HXDate.prototype.init=function(){
		//加载年
		HXDate.prototype.load_year();
		
		//加载月
		HXDate.prototype.load_month();

		//加载日
		//$("#"+HXDate.prototype.dayId).html("<option value='0'>请选择</option>");
		//注册select 下拉事件
		$("#"+HXDate.prototype.yearId).change(function(){
			HXDate.prototype.load_day();
	        });
	        
	    $("#"+HXDate.prototype.monthId).change(function(){
	    	HXDate.prototype.load_day();
	     });
	};
