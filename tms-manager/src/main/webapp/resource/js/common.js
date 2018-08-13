// JavaScript Document
$(function(){
	// 页面 添加 遮挡
	if(!$(".modal-backdrop")){
		$("body").append('<div class="modal-backdrop" style="display:none;"></div>');
	}
	 //初始化
	//leftHtml(); 
	init();
		
		$(window).resize(function(){
			init();	
		});
		
		function init(){
			var rightdivW = parseInt($(window).width() -  $('.leftcon').width() -5);
			
			//表格高度
			var bDivH = parseInt($('.tablebox').height()  - $('.breadcrumb').height() - $('.bottompage').height() -123 );
			$('.bDiv').css('height',bDivH+'px');
			
			var containerH = parseInt($(window).height() -  $('.topbg').height() - $('.copyright').height() );
			$('.containerH').css('height',containerH+'px');			
           
//			$('.rightdiv').css('width',rightdivW -27 +'px');
			$('.rightdiv').css('width',rightdivW +'px');
			$('.rightdiv').css('height',containerH+'px');
			
			$('.leftdiv').css('height',containerH+'px');
			
			var rightabH=parseInt(containerH  -$('.tarbtn').height());
            $('.rightab').css('height',rightabH+'px');
			
			//左边公用
//			var leftimgmiddleH = parseInt($(window).height() -  $('.topbg').height()  - $('.leftimgtop').height() -$('.leftimgbottom').height() - $('.copyright').height() -16 );
			var leftimgmiddleH = parseInt($(window).height() - $('.leftimgtop').height() -$('.leftimgbottom').height() -16 );
		    $('.leftimgmiddle').css('height',leftimgmiddleH+'px');
			
			//tablebox
			var tablebox = parseInt(containerH - $('.righttopbtn').height() -18 );
			$('.tablebox').css('height',tablebox+'px');
			$('.tbbox2').css('height',tablebox+'px');
			
			//box
			var box =  parseInt($('.tablebox').height()  - $('.breadcrumb').height() - $('.bottompage').height() -95 );
			$('.box').css('height',box+'px');
			
			//detail
			var boxdetail =  parseInt($('.tablebox').height()  - $('.breadcrumb').height() -65 );
			$('.boxdetail').css('height',boxdetail+'px');
			
			//containerbox
			var containerbox = parseInt($('.tablebox').height()  - $('.breadcrumb').height()-60 );
			$('.containerbox').css('height',containerbox+'px');
			
			//.contentR
			$('.contentR').css('min-width','782px');
			$('.contentR').css('height',containerH -18 +'px');
			
			//addstoreteam
			$('.storemes').css('width',$('.rightdiv').width() -$('.tooltipdiv').width() -86+'px');	
			
			
			$('.btn').hover(function(){
				$(this).addClass('btnHover');
			},function(){
				$(this).removeClass('btnHover');	
			});
			
			
			
			
			
			//弹出框
			var modalW = parseInt(($(window).width() - $('.modal').width())/2);
			var modalH = parseInt(($(window).height() - $('.modal').height())/2);
			$('.modal').css('left',modalW+'px');
			$('.modal').css('top',modalH+'px');
			
			//弹出框多个弹出框时，可自己在后面按顺序添加
			var modalW_1 = parseInt(($(window).width() - $('.modal_1').width())/2);
			var modalH_1 = parseInt(($(window).height() - $('.modal_1').height())/2);
			$('.modal_1').css('left',modalW_1+'px');
			$('.modal_1').css('top',modalH_1+'px');
			
			if($(window).width()>1024){
				$('.search_input').addClass('span3').removeClass('span0');
				$('.search_sel').addClass('span2').removeClass('span0');
				}else if($(window).width()<=1024){
					$('.search_input').addClass('span0').removeClass('span3');
					$('.search_sel').addClass('span0').removeClass('span2');
					}	
					
		}

	
	
	   
	   //用户面板
	    $(".userlive").mouseover(function(){
		  $(".userpanel").show();
		});
		
	   $(".userlive,.userpanel").mouseleave(function(){
		   $(".userpanel").hide();
		 });
		
	  
	 
	
	//系统设置
	$('.set_system').click(function(){
		window.location = "setting.html";
		});
 
		
		
		
		
		
		
		//table上方按钮
		var isClick=false;
		$('.righttopbtn>div.normalbtn').click(function(){
			$(this).addClass('normalbtnhit').siblings().removeClass('normalbtnhit');
			}).hover(
			   function(){
				   if(isClick==true){
							return;	
						}
					$(this).addClass('normalbtnhit');	
				   },
			   function(){
				   if(isClick==true){
						return;	
					}
				   $(this).removeClass('normalbtnhit');
				   }
			);	
			
		
		//页码
		$('.pagination>ul>li>a').click(function(){
			$(this).addClass('hit');
			$(this).parent().siblings().children().removeClass('hit');	
			});
		
		
		
		
	
	
	
//	<!--修改密码-->
	$('.editpassword').click(function(){
		$('#passwordModal').modal('show');
		});
	
	/**
	var editpassword = '';
	    editpassword += '<div id="passwordModal" class="modal hide">';
			editpassword += '<div class="modal-header">';
			editpassword += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">修改密码</h3>';
			editpassword += '</div>';
			editpassword += '<div class="modal-body">';
				editpassword += '<form class="form-horizontal">';
				editpassword += '<div class="control-group"><label class="control-label">原密码：</label><div class="controls"><input type="password"></div></div>';
				editpassword += '<div class="control-group"><label class="control-label">新密码：</label><div class="controls"><input type="password"></div></div>';
				editpassword += '<div class="control-group"><label class="control-label">确认新密码：</label><div class="controls"><input type="password"></div></div>';
				editpassword += '</form>';
			editpassword += '</div>';
			editpassword += '<div class="modal-footer">';
				editpassword += '<button class="btn" data-dismiss="modal" aria-hidden="true" >关闭</button>';
				editpassword += '<button class="btn btn-primary" >保存</button>';
			editpassword += '</div>';
		editpassword += '</div>';
		$('body').append(editpassword);	
		var modalWi = parseInt(($(window).width() - $('#passwordModal').width())/2);
		var modalHe = parseInt(($(window).height() - $('#passwordModal').height())/2);
		$('#passwordModal').css('left',modalWi+'px');
		$('#passwordModal').css('top',modalHe+'px');
	**/	   
	
	});
	
	
//公用错误弹出方法alertinfo
		function alertinfo(info,rel) {
			var _html = '';
			_html += '<div id="commonModel" class="modal" style="display:none;">';
				_html += '<div class="modal-header">';
					_html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
					_html += '<h3 id="myModalLabel">提示</h3>';
				_html += '</div>';
				_html += '<div class="modal-body">'+info+'</div>';
				_html += '<div class="modal-footer">';
					_html += '<button class="btn btn-info alertok"   aria-hidden="true">确定</button>';
				_html += '</div>';
			_html += '</div>';
			$('body').append(_html);
			$("#commonModel").show();
			//存在回调函数
			if(rel) {
				$('#commonModel').live('click',rel);
				}
			}
		
jQuery(document).ready(function($) {
	$("form").submit(function () {
		//displayOverlayer();			
		return true;
	});
});

//显示遮挡层
function displayOverlayer() {
	    $("<div id='overlayer'></div>").appendTo('body').fadeIn(2000, function () {
	        $(this).addClass("overlayer");
	        $("#overlayer").css("width", Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px");
	        $("#overlayer").css("height", Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px");        	
	    	$("#overlayer").mask("Waiting...");
	    });	
}

//移除遮挡层
function removeOverlayer() {
	$("#overlayer").remove();
}
