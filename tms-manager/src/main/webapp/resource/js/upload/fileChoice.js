/*
 * poductSelect.js
 * author:sxt
 * 倒计时
 */

/*
 * param: 
 * String:provinceId,cityId,distinctId
 * boolean:autoLoad
 * String:actionUrl
 * user_proviceId,user_cityId,user_districtId：需要加载的user的地区信息
 */
function TestLocation(btnId
		,callUrl
		,flashUrl
		,callback){ 
	TestLocation.prototype.btnId = btnId;
	TestLocation.prototype.callUrl = callUrl;
	TestLocation.prototype.flashUrl = flashUrl;
	TestLocation.prototype.callback = callback;
}



//设置校验的时间
TestLocation.prototype.init= function(id,item_li){
	var btnId =TestLocation.prototype.btnId;
	var callUrl = TestLocation.prototype.callUrl;
	var flashUrl = TestLocation.prototype.flashUrl;
	var callback = TestLocation.prototype.callback;
	var settings = {
	        flash_url : flashUrl,
	        upload_url: callUrl,
	        file_post_name:"filedata",
	        file_size_limit : "100 MB",
	        file_types : "*.*",
	        file_types_description : "All Files",
	        file_upload_limit : 100,
	        file_queue_limit : 0,
	        custom_settings : {
	            progressTarget : "fsUploadProgress",
	            cancelButtonId : "btnCancel"
	        },
	        debug: false,
	        use_query_string : true,//要传递参数，必须配置,可以从后台取到参数,应该还有其他方式，如post方式，未了解
	        // Button Settings
	        button_image_url : "../static/img/uploadImg.png",
	        button_placeholder_id : btnId,	
	        button_width: 98,
	        button_height: 30,
	        //button_text: '浏览',
	        //button_text_style: ".spanButtonPlaceholder { font-size: 12; }",
	        //button_text_top_padding: 3,
	        
	        file_queued_handler : fileQueued,
	        file_queue_error_handler : fileQueueError,
	        file_dialog_complete_handler : fileDialogComplete,
	        upload_start_handler : uploadStart,
	        upload_progress_handler : uploadProgress,
	        upload_error_handler : uploadError,
	        upload_success_handler : uploadSuccess,
	        upload_complete_handler : uploadComplete
	        //queue_complete_handler : queueComplete  // Queue plugin event
	    };
	 var swfu;
	 swfu = new SWFUpload(settings,id,item_li,callback);
};