// JavaScript Document

$(function(){
	
	init();
		
		$(window).resize(function(){
			init();	
		})
		
		function init(){
					
			var loginblueTop = parseInt( ($(window).height() -  $('.loginblue').height() ) / 2);
			$('.loginblue').css('top',loginblueTop+'px');
			
			var loginboxTop = parseInt( ($(window).height() -  $('.loginbox').height() ) / 2);
			var loginboxLeft = parseInt( ($(window).width() -  $('.loginbox').width() ) / 2);
			$('.loginbox').css('top',loginboxTop -100 +'px');
			$('.loginbox').css('left',loginboxLeft+'px');
			
			var loginboxTitleLeft = parseInt( ($('.loginbox').width() -  $('.loginboxtitle').width() ) / 2);
			$('.loginboxtitle').css('left',loginboxTitleLeft+'px');
			
			var boxLeft = parseInt( ($('.loginbox').width() -  $('.box').width() ) / 2);
			$('.box').css('left',boxLeft+'px');
			
			var logoLeft = parseInt( ($('.loginboxtopdiv').width() -  $('.loginboxtopdiv>p').width() ) / 2);
			$('.logo').css('margin-left',logoLeft+'px');
			
			var loginbottom = parseInt(($(window).width() -  $('.loginbottom').width() ) / 2);
			$('.loginbottom').css('left',loginbottom+'px');

		}
		
		
	
	})