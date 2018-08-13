// JavaScript Document
$(function(){
	// 页面 添加 遮挡
	if(!$(".modal-backdrop")){
		$("body").append('<div class="modal-backdrop" style="display:none;"></div>');
	}
	 //初始化
	//leftHtml(); 
	init2();
		
		$(window).resize(function(){
			//init2();	
		});
});

function init2(){
	
	//var rightdivW = parseInt($(window).width() -  $('.leftcon').width() -5);
	
	//表格高度
	var bDivH = parseInt($('.tablebox').height()  - $('.breadcrumb').height() - $('.bottompage').height() -123 );
	$('.bDiv').css('height',bDivH+'px');
	
	var containerH = parseInt($(window).height() -  $('.topbg').height() - $('.copyright').height() );
	$('.containerH').css('height',containerH+'px');			
    
	
	$('.rightdiv').css('width','975px');
	
	//$('.rightdiv').css('height',containerH+'px');
	
	
	$('.leftdiv').css('height',containerH+'px');
	
	
	var rightabH=parseInt(containerH  -$('.tarbtn').height());
    $('.rightab').css('height',rightabH+'px');
	
	//左边公用
	//var leftimgmiddleH = parseInt($(window).height() -  $('.topbg').height()  - $('.leftimgtop').height() -$('.leftimgbottom').height() - $('.copyright').height() -16 );
    //$('.leftimgmiddle').css('height',leftimgmiddleH+'px');
	
	//tablebox
	//var tablebox = parseInt(containerH - $('.righttopbtn').height() -18 );
	//$('.tablebox').css('height',tablebox+'px');
	//$('.tbbox2').css('height',tablebox+'px');
	
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
	$('.contentR').css('height','600px');
	
	//addstoreteam
	$('.storemes').css('width',$('.rightdiv').width() -$('.tooltipdiv').width() -86+'px');	
	
	
	$('.btn').hover(function(){
		$(this).addClass('btnHover');
	},function(){
		$(this).removeClass('btnHover');	
	});
	
	
	
	
	
	//弹出框
	/*
	var modalW = parseInt(($(window).width() - $('.modal').width())/2);
	var modalH = parseInt(($(window).height() - $('.modal').height())/2);
	$('.modal').css('left',modalW+'px');
	$('.modal').css('top',modalH+'px');
	
	if($(window).width()>1024){
		$('.search_input').addClass('span3').removeClass('span0');
		$('.search_sel').addClass('span2').removeClass('span0');
		}else if($(window).width()<=1024){
			$('.search_input').addClass('span0').removeClass('span3');
			$('.search_sel').addClass('span0').removeClass('span2');
	}	
    */	




//页码
$('.pagination>ul>li>a').click(function(){
	$(this).addClass('hit');
	$(this).parent().siblings().children().removeClass('hit');	
	});
}
	