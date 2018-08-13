var DataPick = function(params){
	this.modal_id = params.modal_id;
	this.form_id = params.form_id;
	this.result_id = params.result_id;
	this.fillTableData = params.fillTableData;
};

DataPick.dataList = null;
DataPick.selectDataList = null;
DataPick.queryParams = new Array();

//初始化查询条件(清空)
DataPick.prototype.initQuery = function(){
	$("#" + this.result_id).html("");
	var inputarr = $("#" + this.form_id).find("input");
    for(var i = 0 ; i< inputarr.size() ; i++ ){
        if(inputarr[i].type == "text"){
            $(inputarr[i]).val("");
        }
    }
    var selectarr = $("#" + this.form_id).find("select");
    for(var i = 0 ; i< selectarr.size() ; i++ ){
        $(selectarr[i]).val("");
    }
};

//打开pick Panel
DataPick.prototype.openPick = function(){
	$("#" + this.modal_id).show();
	$("#pick_backdrop").show();
	this.setQueryVlaue();
	//this.search();
};
		
//关闭pick Panel
DataPick.prototype.closePick = function(){
	$("#" + this.modal_id).hide();
	$("#pick_backdrop").hide();
};
		
//根据Id给查询字段赋值
/*
DataPick.prototype.setQueryVlaue = function(id, data){
	$("#" + id).val(data);
};
 */

DataPick.prototype.setQueryVlaue = function(){
	this.initQuery();
	for(var i = 0 ; i< DataPick.queryParams.length ; i++ ){
		$("#"+DataPick.queryParams[i].key).val(DataPick.queryParams[i].value);
	}
};
		
//查询数据
DataPick.prototype.search = function(){
	this.ajaxSubmitForm(this.form_id);
};

DataPick.prototype.clickOk = function(data ){
	DataPick.callback(data);
};

//回调函数，用于对数据的处理
DataPick.callback = function(data){
	
};

DataPick.prototype.ajaxSubmitForm = function(formId) {
	var self = this;
	var form = $('#' + formId);
	var formJson =form.serializeObject();
	var formData = "";
	for(var item in formJson){
		formData +=item+"="+formJson[item]+"&";
	}
	formData = formData.substring(0, formData.length-1);
	jQuery.ajax({
		  	async : true,
		  	type : "post" ,
			data: formData ,
			url:form.attr("action"),
			success:function(json){
				if(json.ok){
					//回调函数，用于填充Table数据
					//CommonUtil.printAjaxPageDataList(json.data);
					self.fillTableData(json.data);
				}else{
					//
					//console.log("error");
				}
			},
			error:function(){
			  	//
				//console.log("ajaxerror");
			}
	});
};