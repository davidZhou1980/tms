/*
 * hx模板js,实现加载模板后事件注册，修改模板元素的功能
 * author:yulu
 * 
 */

function HXTp(){}

/*
 * param:object名称，资源类型(object_type:image,text,html )，长，宽，顺序
 */
function HXTpObject(name,type,width,height,order){
	this.name=name;
	this.type=type;
	this.width=width;
	this.height=height;
	this.order=order;
};

function HXTpDiv(divname,objectList){
	this.name=divname;
	this.objectList=objectList;
}

//加载模板的提示信息
HXTp.prototype.init=function(){
  //初始化，分析page信息，再分析div信息，返回div结构
	//alert("init");
	var tp_file_info=new Object();
	//获取page信息
	$("[hxtp='istp_page']").each(function(){
		var pagename=$(this).attr("hxtp_name");
		//alert("pagename:"+pagename);
		tp_file_info.pagename=pagename;
	});
	
	tp_file_info.divList=new Array();
	
	$("[hxtp='istp_div']").each(function(){
		var divname=$(this).attr("hxtp_name");
		
		//console.log("divname:"+divname);
		var objectList=HXTp.prototype.getDivObjectList(this);
		var  hxtpDiv=new HXTpDiv(divname,objectList);
		
		//alert("size:"+objectList.length);
		//tp_file_info.objectList.push(objectList);
		tp_file_info.divList.push(hxtpDiv);
	});
	
	return tp_file_info;
};

HXTp.prototype.getDivObjectList=function(div_object){
	//获取其下的object，属性 type，长，宽，顺序
	var order=1;
	var width,height,type,name;
	var divname=$(div_object).attr("hxtp_name");
	var divObjectList=new Array();
	var hxtpin=0;
	//name 如果没有，就是用 div的name+order
	$(div_object).children().each(function(){
		
		if($(this).attr("hxtp")=="istp_object"){
			width=$(this).css("width").replace("px","");
			height=$(this).css("height").replace("px","");
			type=$(this).attr("hxtype");
			name=$(this).attr("hxtp_name");
			hxtpin=$(this).attr("hxtpin");
			
			if(typeof(name)=="undefined"){
				name=divname+order;
			}
			console.log("hxtpin:"+hxtpin);
			//console.log("name:"+name+"type:"+type+"width:"+width+"height:"+height+"order:"+order);
			var hxtpobject=new HXTpObject(name,type,width,height,order);
			
			//hxtp in=0 修改自己的内容，in=1 修改第一个孩子的内容
			if(hxtpin==0){
				//$(this).html("");
				$(this).html(name+"   顺序:"+order);
			}else{
				var child_obj=$(this).children().first();
				$(child_obj).html(name+"  顺序:"+order);
			}
			divObjectList.push(hxtpobject);
			order++;
		}
		
	});
	
	return divObjectList;
};