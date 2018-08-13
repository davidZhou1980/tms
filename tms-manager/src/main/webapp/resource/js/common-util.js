//fastdfs服务器地址，使用fastdfs图片的时候使用
//var FASTDFS_SERVER = "http://pic01.hxshopimg.com/";
//var FASTDFS_SERVER="http://smokeimg.hxshop.com/";

/*
var FASTDFS_SERVER="http://192.168.101.184";
var URL_PREFIX="http://www.hxshop.com/";
*/
//var URL_PREFIX="http://clone.oa.hxshop.com/";
//var URL_PREFIX="http://192.168.1.103/hxshop-manager/";

//公共类命名空间
var CommonUtil = {
		//公共初始化
		initCommonCheckBox : function(){
			//复选框事件初始化
			if($("#allCheckboxItemChecked").length == 1){
				$("#allCheckboxItemChecked").live("click",function() {
					if ($(this).get(0).checked == true ) { // 全选
						$("input[name='checkboxItem']").each(function() {
							$(this).attr("checked", true);
							$(this).parent().parent().parent().attr("ischecked", "ischecked");
							
						});
					} else { // 取消全选
						$("input[name='checkboxItem']").each(function() {
							$(this).attr("checked", false);
							$(this).parent().parent().parent().attr("ischecked", "nochecked");
						});
					}
				});
				$("input[name='checkboxItem']").live("click",function() {
					$("input[name='allCheckboxItemChecked']").attr("checked", false);
					if($(this).get(0).checked == true){
						$(this).parent().parent().parent().attr("ischecked", "ischecked");
						$(this).parent().parent().parent().addClass("trSelected");
						
					}else {
						$(this).parent().parent().parent().removeClass("trSelected");
						$(this).parent().parent().parent().attr("ischecked", "nochecked");
					}
				});
			}
		},
		/**
		 * 读取cookies
		 */
		getCookie :function(name) {
		    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		    if(arr=document.cookie.match(reg))
		        return (arr[2]);
		    else
		        return null;
		},

		//获取复选框所有被选中的值
		getSelectedCheckBoxValue : function(){
			var ids = new Array();
			var index = 0 ;
			$("input[name='checkboxItem']").each(function() {
				if($(this).get(0).checked == true){
					ids[index]=$(this).val();
					index++;
				}
			});
			return ids;
		},
		//获取复选框所有被选中属性的值
		getSelectedCheckBoxAttrVal : function(attr){
			var attrs = new Array();
			var index = 0 ;
			$("input[name='checkboxItem']").each(function() {
				if($(this).get(0).checked == true){
					attrs[index]=$(this).attr(attr);
					index++;
				}
			});
			return attrs;
		},
		// 分页跳转
		gotoPage : function(formId, page) {
			// var form = $('form[name="'+formName+'"]');
			var form = $('#' + formId);
			var onePageCount = $('#onePageCount').val();
			form.append('<input type="hidden" name="currentPage" value="' + page
					+ '" />');
			form.append('<input type="hidden" name="onePageCount" value="'
					+ onePageCount + '" />');
			
			displayOverlayer();
			
			form.submit();
		},
		// 分页跳转
		gotoPageIn : function(formId, inputId) {
			var inputPage = $('#' + inputId).val();
			var re = /^[0-9]*[1-9][0-9]*$/;
			if (!re.test(inputPage)) {
				$('#' + inputId).attr('value', '');
				return;
			}
			this.gotoPage(formId, inputPage);
		},
		isInitAlertInfo:false,
		isInitAlertdaochu:false,
		isInitConfirm:false,
		initAlertInfo:function(){
			var _html = '';
			_html += '<div id="commonModel" class="modal fade" style="position:absolute;top:212px;left:640px;display:none;">';
				_html += '<div class="modal-header">';
					_html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
					_html += '<h3 id="_myModalLabel">提示</h3>';
				_html += '</div>';
				_html += '<div class="modal-body"></div>';
				_html += '<div class="modal-footer">';
					_html += '<button class="btn btn-info alertok"   aria-hidden="true">确定</button>';
				_html += '</div>';
			_html += '</div>';
			//_html += '<div class="modal-backdrop" id="mymodal-back_drop" style="display:none;"></div>';
			$('body').append(_html);
			$('#commonModel button').click(function(){
				$('#commonModel').hide();
				//$('.modal-backdrop').hide();
			});
			this.isInitAlertInfo = true;
		},
		initConfirm:function(){
			var _html = '';
			_html += '<div id="commonConfirmModel" class="modal fade" style="position:absolute;top:212px;left:640px;display:none;">';
			_html += '<div class="modal-header">';
			_html += '<button id="commonConfirmCloseBtn" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
			_html += '<h3 id="myConfirmModalLabel">提示</h3>';
			_html += '</div>';
			_html += '<div class="modal-body"></div>';
			_html += '<div class="modal-footer">';
			_html += '<button id="commonConfirmOkBtn" class="btn btn-info alertok"   aria-hidden="true">确定</button>';
			_html += '<button id="commonConfirmFailBtn" class="btn btn-info alertok"   aria-hidden="true">取消</button>';
			_html += '</div>';
			_html += '</div>';
			_html += '<div class="modal-backdrop mycommonConfirmModelmodal-backdrop" style="display:none;"></div>';
			$('body').append(_html);
			$('#commonConfirmCloseBtn').click(function(){
				$('#commonConfirmModel').hide();
				$('.modal-backdrop').hide();
				$('#commonConfirmOkBtn').unbind("click");
			});
			
			$('#commonConfirmFailBtn').click(function(){
				$('#commonConfirmModel').hide();
				$('.modal-backdrop').hide();
				$('#commonConfirmOkBtn').unbind("click");
			});
			this.isInitConfirm = true;
		},
		initAlertdaochu:function(){
			var _html = '';
			_html += '<div id="commondaochu" class="modal fade">';
				_html += '<div class="modal-header">';
					_html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
					_html += '<h3 id="myModalLabel">导出</h3>';
				_html += '</div>';
				_html += '<div class="modal-body">';
					_html += '<div><label class="radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>导出txt制表符分隔的文本文件</label></div>';
					_html += '<div><label class="radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" >xls-excel文件</label></div>';
					_html += '<div><label class="radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" >csv文件</label>';
				_html += '</div>';
				_html += '<div class="modal-footer">';
					_html += '<button class="btn" data-dismiss="modal" aria-hidden="true" style="font-size:12px;">取消</button>';
					_html += '<button class="btn btn-info" style="font-size:12px;">导出</button>';
				_html += '</div>';
			_html += '</div>';
			$('body').append(_html);
			$('#commondaochu button').click(function(){
				$('#commondaochu').modal('hide');
			});
			this.isInitAlertdaochu = true;
		},
		//公用confirm确认提示弹出方法
		confirm : function(info,rel) {
			if(!this.isInitConfirm){
				this.initConfirm();
			}
			
			function confrimBack(){
				$('#commonConfirmModel').hide();
				$('.modal-backdrop').hide();
				$('#commonConfirmOkBtn').unbind("click");
				
				rel();
			}
			
			//确定按钮绑定回调函数
			$('#commonConfirmOkBtn').on("click",confrimBack);

			$("#commonConfirmModel div").filter(".modal-body").html(info);
			$('#commonConfirmModel').show();
			$('.mycommonConfirmModelmodal-backdrop').show();
		},
		//公用错误弹出方法alertinfo
		alertinfo : function(info,rel) {
			if(!this.isInitAlertInfo){
				this.initAlertInfo();
			}
			$("#commonModel div").filter(".modal-body").html(info);
			$('#commonModel').show();
			//$('.modal-backdrop').show();
			//存在回调函数
			if(rel) {
				$('#commonModel').live('click',rel);
				}
		 },
		//公用common 导出 
		 alertdaochu : function (info,rel) {
			 if(!this.isInitAlertdaochu){
					this.initAlertdaochu();
			 }
			 $('#commondaochu').modal('show');
			//存在回调函数
			if(rel) {
				$('#commondaochu').live('click',rel);
				}
			},
		//检验电话号码、、手机号码
		 checkPhoneAndMobile : function (phone,mobile){
			//验证电话号码手机号码，包含153，159号段 
			if (phone=="" && mobile==""){ 
			CommonUtil.alertinfo("电话号码和手机号码至少选填一个！"); 
			return false; 
			}
			if (phone != ""){
			var p1 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/; 
			var me = false; 
			if (p1.test(phone))me=true; 
			if (!me){ 
			//document.form.phone.value=''; 
			CommonUtil.alertinfo('对不起，您输入的电话号码有错误。区号和电话号码之间请用-分割'); 
			
			return false; 
			}
			} 
			if (mobile != ""){ 
			var reg0 = /^13\d{5,9}$/; 
			var reg1 = /^153\d{4,8}$/; 
			var reg2 = /^159\d{4,8}$/; 
			var reg3 = /^0\d{10,11}$/; 
			var my = false; 
			if (reg0.test(mobile))my=true; 
			if (reg1.test(mobile))my=true; 
			if (reg2.test(mobile))my=true; 
			if (reg3.test(mobile))my=true; 
			if (!my){ 
			CommonUtil.alertinfo('对不起，您输入的手机或小灵通号码有错误。'); 
//			document.form.UserMobile.focus(); 
			return false; 
			} 
			return true; 
			}
			},
		
			checkEmail : function(email)
	        {	
				if(email==""||null==email||undefined==email){
					CommonUtil.alertinfo("请输入邮箱！");
					return false;
				}
	           var _email = email;
	           //对电子邮件的验证
	           var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-|_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	           if(!myreg.test(_email))
	           {
	        	   CommonUtil.alertinfo('请输入有效的邮箱！');
	                myreg.focus();
	                return false;
	           }
	           return true;
	        },
	        //对日期格式校验
	        checkDate : function(date) {
//	            var date = RQ;
	            var result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	            if (result == null)
	                return false;
	            var d = new Date(result[1], result[3] - 1, result[4]);
	            return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4]);
	        },
	      //form post提交
	        sendPostWithoutTime : function(url ,params){
	        	jQuery('<form id="sentpost" action="' + url + '" method="post"></form>')
	        	.appendTo('body');
	            if(null !=params && "" != params ) {
	            	$("#sentpost").append(params); 
	            }  
	            $("#sentpost").submit().remove();
	          }
};

//json long 日期处理方法
/**
* 使用实例
* formartDate("yyyy-MM-dd",time);
*/
function formatDate(dataFormate, time) {
	if(null==time || undefined ==time || time==''){
		return "";
	}
if(null==dataFormate || undefined ==dataFormate || dataFormate==''){
	dataFormate = "yyyy-MM-dd HH:mm:ss";
	}
  var date = new Date();
  time = time+"";
  if(time.length!=13){
  	time = time.substring(0,time.length-1);
  	var a=time.split(/[^0-9]/);
  	var d=new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5]);
//  	alert(d.getTime());
  	date.setTime(d.getTime());
  }else {
  	date.setTime(time);
  }
  return date.pattern(dataFormate);
}
Date.prototype.pattern = function(fmt) {
  var o = {
      "M+" : this.getMonth() + 1, //月份     
      "d+" : this.getDate(), //日     
      "h+" : this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时     
      "H+" : this.getHours(), //小时     
      "m+" : this.getMinutes(), //分     
      "s+" : this.getSeconds(), //秒     
      "q+" : Math.floor((this.getMonth() + 3) / 3), //季度     
      "S" : this.getMilliseconds()
  //毫秒     
  };
  var week = {
      "0" : "日",
      "1" : "一",
      "2" : "二",
      "3" : "三",
      "4" : "四",
      "5" : "五",
      "6" : "六"
  };
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
              .substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1,
              ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周")
                      : "")
                      + week[this.getDay() + ""]);
  }
  if (/(e+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1,
              ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周")
                      : "")
                      + this.getDay());
  }
  for ( var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                  : (("00" + o[k]).substr(("" + o[k]).length)));
      }
  }
  return fmt;
};


//将from 表单序列化为 json 对象
$.fn.serializeObject = function(){
var o = {};
var a = this.serializeArray();
$.each(a, function() {
   if (o[this.name]) {
       if (!o[this.name].push) {
           o[this.name] = [o[this.name]];
       }
       o[this.name].push(this.value || '');
   } else {
       o[this.name] = this.value || '';
   }
});
return o;
};

//封装的 json 请求
$.requestJson = function(uri,callbackFun,param){
	param = param ? param :{};
	$.post(
		uri,
		param,
		function(data, textStatus, jqXHR){
			// alert("textStatus=" + textStatus);
			if($.isFunction(callbackFun)){
				callbackFun(data, textStatus, jqXHR);
			}
		},
		"json"
	);
};


//新增扩展 字符串 方法 replaceAll
String.prototype.replaceAll  = function(s1,s2){   
	return this.replace(new RegExp(s1,"gm"),s2);   
};

//unix时间专为当前时间
hx_getnowtime=function(unixtime){
	var unixtime=parseInt(unixtime);
	var date=new Date(unixtime);
	return (date).toLocaleDateString() + " " + (date).toLocaleTimeString();
}

// html 解码  将后台读取的html内容还原为html内容，放在富文本中显示
UTIL_HtmlDiscode=function(theString){
 return theString.replaceAll("&gt;", ">")
.replaceAll("&lt;", "<")
.replaceAll("&nbsp;", " ")
.replaceAll(" &nbsp;", " ")
.replaceAll("&quot;", "\"")
.replaceAll("&#39;", "\'");
};

Date.prototype.format = function(format) 
{ 
var o = 
{ 
"M+" : this.getMonth()+1, //month 
"d+" : this.getDate(), //day 
"h+" : this.getHours(), //hour 
"m+" : this.getMinutes(), //minute 
"s+" : this.getSeconds(), //second 
"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
"S" : this.getMilliseconds() //millisecond 
} 

if(/(y+)/.test(format)) 
{ 
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
} 

for(var k in o) 
{ 
if(new RegExp("("+ k +")").test(format)) 
{ 
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
} 
} 
return format; 
} 

/**
 * 浮点数加法运算
 * @param arg1
 * @param arg2
 * @returns {Number}
 */
function accAdd(arg1,arg2){
	var r1,r2,m;
	try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
	try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
	m=Math.pow(10,Math.max(r1,r2));
	return (arg1*m+arg2*m)/m;
} 

/**
 * 浮点数减法运算
 * @param arg1
 * @param arg2
 * @returns {Number}
 */
function accSubtr(arg1,arg2){
	var r1,r2,m,n;
	try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;};
	try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;};
	m=Math.pow(10,Math.max(r1,r2));
	//动态控制精度长度
	n=(r1>=r2)?r1:r2;
	return ((arg1*m-arg2*m)/m).toFixed(n);
}

/**
 * 浮点数乘法运算
 */
function accMul(arg1,arg2){
	var m=0,s1=arg1.toString(),s2=arg2.toString();
	try{m+=s1.split(".")[1].length;}catch(e){}
	try{m+=s2.split(".")[1].length;}catch(e){}
	return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
} 

/**
 * 浮点数除法运算
 * 
 * @param arg1
 * @param arg2
 * @returns {Number}
 */
function accDiv(arg1,arg2){
	var t1=0,t2=0,r1,r2;
	try{t1=arg1.toString().split(".")[1].length;}catch(e){}
	try{t2=arg2.toString().split(".")[1].length;}catch(e){}
	with(Math){
		r1=Number(arg1.toString().replace(".",""));
		r2=Number(arg2.toString().replace(".",""));
		return (r1/r2)*pow(10,t2-t1);
	}
} 


