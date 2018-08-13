/*<div style="float:left;margin-bottom:9px;">共$page.getCountRecord()条纪录，当前第$page.getCurrentPage()/$page.getCountPage()页，每页显示
      <select id="onePageCount" class="span1" style="margin-right:5px;" onchange="javascript:CommonUtil.gotoPage('$formName', 1)">
          <option value="10" #if($page.getOnePageCount() == 10) selected="true" #end >10行</option>
        <option value="20" #if($page.getOnePageCount() == 20) selected="true" #end >20行</option>
        <option value="50" #if($page.getOnePageCount() == 50) selected="true" #end >50行</option>
      </select>行。
</div>
<div class="pagination pagination-right" style="float:right;">
  <div class="jump"><span>跳转至第</span><input type="text" id="appendedInputButton" class="span1" placeholder="*共$page.getCountPage()页"><span>页</span><i><a href="#" onclick="javascript:CommonUtil.gotoPageIn('$formName', 'appendedInputButton')">GO!</a></i></div>
  <ul style="float:right;">
    <li><a href="#" onclick="javascript:CommonUtil.gotoPage('$formName', $page.getCurrentPage()-1)">上一页</a></li>
	#foreach($item in [$page.getPageIndex().getStartIndex()..$page.getPageIndex().getEndIndex()])
    			#if($item != 0 && $item == $page.getCurrentPage())
    				<li><a href="#" class="hit">$item</a></li>
    			#elseif($item != 0)
    				<li><a href="#" onclick="javascript:CommonUtil.gotoPage('$formName', $item)" >$item</a></li>
    			#end
    		#end
    <li><a href="#" onclick="javascript:CommonUtil.gotoPage('$formName', $page.getCurrentPage()+1)">下一页</a></li>
  </ul>
</div>
*/
/*
 * 查询列表下方的分页区域
 */
function HXFlexigrid(page,total,rp,arr_rp,submitFun){
	HXFlexigrid.prototype.page=page;
	HXFlexigrid.prototype.total=total;
	HXFlexigrid.prototype.rp=rp;
	HXFlexigrid.prototype.arr_rp=arr_rp;
	HXFlexigrid.prototype.submitFun=submitFun;
}

var rp_option='<option value="{PAGE}" {SELECTED="TRUE"}  >{PAGE}行</option>';

var jump_page_html='<div class="pagination pagination-right" style="float:right;"><div class="jump"><span>跳转至第</span><input type="text" id="appendedInputButton" class="span1" placeholder="*共{ALLPAGE}页"><span>页</span><i><a href="#" onclick="HXFlexigrid.prototype.gotoInputPage();">GO!</a></i></div><ul style="float:right;"><li><a href="#" onclick="HXFlexigrid.prototype.gotoPage(\'{PREPAGE}\')">上一页</a></li>{PAGES}<li><a href="#" onclick="HXFlexigrid.prototype.gotoPage(\'{NEXTPAGE}\')">下一页</a></li></ul></div>';

var jump_page_start=1;  //页面显示开始的页码
var jump_page_end=1;   //页码显示结束的页码

var jump_page_html_now='<li><a href="#" class="hit">{PAGE}</a></li>';
var jump_page_html_notnow='<li><a href="#"onclick="HXFlexigrid.prototype.gotoPage(\'{PAGE}\')" >{PAGE}</a></li>';

var jump_page_allpage=0;
//1,11, 1,11
//6,11, -5,11
//10,11 -2 11
HXFlexigrid.prototype.getJumpPageRegion=function(page,allpage){
	var test_jump_page_start=parseInt(page)-3;   //7
	var test_jump_page_end=parseInt(page)+3;   //13
	
	//情况： 前面 后面都可以移动
	if(test_jump_page_start>=1 && test_jump_page_end<=allpage){
		jump_page_start=test_jump_page_start;
		jump_page_end=test_jump_page_end;
		return;
	}
	//前面可以移动，后面不可以移，直接前面到顶
	if(test_jump_page_start>=1 && test_jump_page_end>allpage){
		jump_page_end=allpage;
		if(jump_page_end-6<1){
			jump_page_start=1;
		}else{
			jump_page_start=jump_page_end-6;
		}
		return;
	}
	//前面不可移动，后面可以，后面到最后
	if(test_jump_page_start<1 && test_jump_page_end>=allpage){
		jump_page_start=1;
		if(jump_page_start+6>allpage){
			jump_page_end=allpage;
		}else{
			jump_page_end=jump_page_start+6;
		}
		return;
	}
	
	//前面不可移动，后面未到最后
	//都不可移动
	if(test_jump_page_start<1 && test_jump_page_end<allpage){
		jump_page_start=1;
		if(jump_page_start+6>allpage){
			jump_page_end=allpage;
		}else{
			jump_page_end=jump_page_start+6;
		}
		return;
	}
	
}

//获取当前 页码显示的html，nowpage：当前页码   total总记录数， rp：每页记录条数
HXFlexigrid.prototype.getJumpPageHtml=function(page,total,rp){
	var allpage=0;
	if(total%rp==0){
		allpage=total/rp;
	}else{
		allpage=Math.floor(total/rp)+1;
	}
	jump_page_allpage=allpage;
	//获取当前需要显示的区间  startpage,endpage
	HXFlexigrid.prototype.getJumpPageRegion(page,allpage);
	//alert("page:"+page+"allpage:"+allpage+"jump_page_start:"+jump_page_start+"jump_page_end:"+jump_page_end);
	var html="";
	for(var i=jump_page_start;i<=jump_page_end;i++){
		var addhtml="";
		if(page==i){
			addhtml=jump_page_html_now.replace("{PAGE}",i);	
		}else{
			addhtml=jump_page_html_notnow.replaceAll("{PAGE}",i);	
		}
		html+=addhtml;
	}
	return html;
};

HXFlexigrid.prototype.getPageHtml=function(){
	var html='<div style="float:left;margin-bottom:9px;">共{TOTAL}条纪录，当前第{PAGE}/{ALLPAGE}页，每页显示<select id="onePageCount" class="span1" style="margin-right:5px;" onchange="HXFlexigrid.prototype.changerp();">';
	html=html.replace("{TOTAL}",HXFlexigrid.prototype.total).replace("{PAGE}",HXFlexigrid.prototype.page);
	
	var arr_rp=HXFlexigrid.prototype.arr_rp;
	var len_arr_rp=arr_rp.length;
	
	for(var i=0;i<len_arr_rp;i++){	
		
		var add_html=rp_option.replaceAll("{PAGE}",arr_rp[i]);
		/*
		if(HXFlexigrid.prototype.rp==arr_rp[i]){
			add_html=add_html.replace("{SELECTED=\"TRUE\"}","{selected=\"true\"}");
		}else{
			add_html=add_html.replace("{SELECTED=\"TRUE\"}","");
		}
		*/
	  html+=add_html;
	}
	
	html+=(" </select>行。</div>");
	
	//加当前页码和左右侧页码（最多显示7页）当前页在中间（尽可能，除非无法靠近）
	var page=HXFlexigrid.prototype.getJumpPageHtml(HXFlexigrid.prototype.page,HXFlexigrid.prototype.total,HXFlexigrid.prototype.rp);
	
	html+=jump_page_html.replace("{PAGES}",page);
	html=html.replaceAll("{ALLPAGE}",jump_page_allpage);  //替换总页数
	
	//替换上一页，下一页
	var PREPAGE=parseInt(HXFlexigrid.prototype.page)-1;
	var NEXTPAGE=parseInt(HXFlexigrid.prototype.page)+1;
	html=html.replace("{PREPAGE}",PREPAGE).replace("{NEXTPAGE}",NEXTPAGE);
	return html;
};

//跳转页面
HXFlexigrid.prototype.gotoInputPage=function(){
	//如果page页码不是数字或者 范围不在1-最大页码之间，报错
	var userInputPage=$("#appendedInputButton").val();
	if(isNaN(userInputPage) || userInputPage==""){
		 CommonUtil.alertinfo("请输入数字");
		 return;
	}
	
	var userpage=parseInt(userInputPage);
	
	if(userpage<1 || userpage>jump_page_allpage){
		 CommonUtil.alertinfo("页码范围在1-"+jump_page_allpage+"之间");
		 return;
	}
	
	HXFlexigrid.prototype.gotoPage(userpage);
	
};

HXFlexigrid.prototype.gotoPage=function(page){
	//跳转页码
	//当前页<1,  page=1
	
	//当前页大于最大页，page=最大页
	if(page<1){
		page=1;
	}
	
	if(page>jump_page_allpage){
		page=jump_page_allpage;
	}
	
	//alert("page:"+page)
	HXFlexigrid.prototype.submitFun(HXFlexigrid.prototype.rp,page);
	
};

//每页记录条件变化
HXFlexigrid.prototype.changerp=function(){
	HXFlexigrid.prototype.rp=$("#onePageCount").val();
	HXFlexigrid.prototype.submitFun(HXFlexigrid.prototype.rp,1);
}