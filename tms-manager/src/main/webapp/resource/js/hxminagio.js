/*
 * author:yulu
 * usage:获取web_page_object_id的打折信息
 */

/*
 * 初始化参数：
 * serverUrl: 后台查询接口
 * id_arr: web_page_object_id  数组
 * sp_id_arr: 显示折扣的span id
 */
function HxMinagio(serverurl,id_arr,sp_id_arr){
	HxMinagio.prototype.serverurl=serverurl;
	HxMinagio.prototype.id_arr=id_arr;
	HxMinagio.prototype.sp_id_arr=sp_id_arr;
};

HxMinagio.prototype.init=function(){
	//循环，依次查询折扣信息
	 var url=HxMinagio.prototype.serverurl;
	 var len=HxMinagio.prototype.id_arr.length;
	 for(var i=0;i<len;i++){
		 var nowurl=url+"?id="+HxMinagio.prototype.id_arr[i]+"&spid="+HxMinagio.prototype.sp_id_arr[i];
		 jQuery.requestJson(nowurl, HxMinagio.prototype.getDataCallBack,''); 
	 }
};

HxMinagio.prototype.getDataCallBack=function(resdata){
	var spid=resdata.stateCode;
	if(!resdata.ok) {
		//console.log("fail");
		//fail 统一定为 3.5折
		$("#"+spid).html("6.6");
		return;
	}else{
		//设置折扣值
		var minagio=resdata.data;
		$("#"+spid).html(minagio);
	}
};