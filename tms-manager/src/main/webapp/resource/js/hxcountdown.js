/*
 * author:yulu
 * usage: 倒计时功能
 * 页面上有多个div，每个div都有一个截止时间，计算当前时间（服务器时间）到截至时间的时间
 * 格式显示为  
 * （未到截至时间：剩余06天12小时45分10秒 ，如果不到一天，或不到1小时，不到1分，天/小时/分 不显示
 * 如:  不显示0天0小时30分03秒，显示 30分03秒
 * （已到截至时间： 已结束）
 */
/*
 * 构造函数：param：
 * serverURL： 服务器返回时间的URL
 * //在本页面进入时 校准一次时间即可，不必每次都校准时间，因为每次用的都是服务器时间
 * deadlineTimeArr   //截止时间数组（存放的是时间戳）
 * showTimeSpanArr   //显示倒计时的span数组  与deadlineTimeArr 一一对应即可
 */
function HxCountdown(serverURL
		,deadlineTimeArr
		,showtimeSpanIdArr
		){
	HxCountdown.prototype.serverUrl=serverURL;
	HxCountdown.prototype.deadlineTimeArr=deadlineTimeArr;
	HxCountdown.prototype.showtimeSpanIdArr=showtimeSpanIdArr;
	HxCountdown.prototype.serverTime=0; //服务器的时间戳
	HxCountdown.prototype.intervalTime=0; //获取服务器时间后 过了多少秒，每个 1s增加1
}

//开始使用倒计时
HxCountdown.prototype.init=function(){
	//获取服务器的时间戳
	 var url=HxCountdown.prototype.serverUrl;
     jQuery.requestJson(url, HxCountdown.prototype.getServerTimeCallback,''); 
};

//获取服务器时间后回调
HxCountdown.prototype.getServerTimeCallback=function(resdata){
	HxCountdown.prototype.serverTime=parseInt(resdata.message);
	 
	//每个1秒执行1次，实时刷新倒计时时间 function(){console.log("1111");}
	setInterval(function(){HxCountdown.prototype.showTime();}, 1000); 
};

//showTime,每个1s执行1次
HxCountdown.prototype.showTime=function(){
	HxCountdown.prototype.serverTime+=1000;
	var len=HxCountdown.prototype.deadlineTimeArr.length;
	for(var i=0;i<len;i++){
		$("#"+HxCountdown.prototype.showtimeSpanIdArr[i]).html(HxCountdown.prototype.getShowTimeHtml(HxCountdown.prototype.deadlineTimeArr[i],HxCountdown.prototype.serverTime));
	}
};

//计算倒计时函数，输入当前时间戳，截止时间戳，返回需要显示的时间
HxCountdown.prototype.getShowTimeHtml=function(deadlineTime,serverTime){
	 var item = deadlineTime - serverTime;
	 var timehtml="剩余";
     if(item <=0){
    	 timehtml = '促销已经结束';
         return timehtml;
     }else{
         var day = Math.floor(Math.abs(item /86400000));
         var seLeft = item;
         var hour = 0;
         var min = 0;
         var sec = 0;
         seLeft = seLeft % 86400000;
         hour = Math.floor(Math.abs(seLeft / 3600000));
         seLeft = seLeft % 3600000;
         min = Math.floor(Math.abs(seLeft / 60000));
         seLeft = seLeft % 60000;    
         sec = Math.floor(Math.abs(seLeft / 1000));
         
         //如果day,hour,min,sec 小于10，前面加0 , 秒前面
         if(day<10){
        	 day="0"+day;
         }
         if(hour<10){
        	 hour="0"+hour;
         }
         if(min<10){
        	 min="0"+min;
         }
         
         if(sec<10){
        	 sec="0"+sec;
         }
         if(day!="00"){
        	 timehtml+=(day+"天");
         }
         if( !(day=="00" && hour=="00") ){        //不需要显示小时的情况   天为0并且hour=0
        	 timehtml+=(hour+"小时");
         }
         if(!(day=="00" && hour=="00" && min=="00")){
        	 timehtml+=(min+"分");
         }
         if(!(day=="00" && hour=="00" && min=="00" && sec=="00")){
        	 timehtml+=(sec+"秒");
         }
        
         return timehtml;
     }
};


