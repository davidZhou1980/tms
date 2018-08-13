//表单检查类
var CheckForm = {};

//设定表单多检查器的检查方法，默认条件为与，多条件全部满足返回true，否则返回false
//可以设置为 或，只有一个条件满足就返回true，否则返回false


CheckForm.Form = function(items){
    this.fields=items;                             //把字段验证对象数组复制给属性
     for(var idx=0;idx<this.fields.length;idx++){       //循环数组
          var fc=this.getCheck(this.fields[idx]);   //获取封装后的回调事件
          $("#"+this.fields[idx].fieldId).blur(fc); //绑定到控件上
      }
    };

  //绑定验证事件的处理器，为了避开循环对闭包的影响
CheckForm.Form.prototype.getCheck=function(field){
   return function(){   //返回包装了调用validate方法的事件
	   field.validate();
    };
 };

//绑定提交事件到元件
CheckForm.Form.prototype.setSubmit=function(submitButtonId,callback){
      var self=this;
      $("#"+submitButtonId).click(
          function(){
              if(self.validate()){
            	  callback();
              }
          }
     );
 };
 
//验证所有的字段
 CheckForm.Form.prototype.validate=function(){
     for(var idx in this.fields){             //循环每一个验证器
         this.fields[idx].validate();     //再检测一遍
         if(!this.fields[idx].checked){   
             return false;                //如果错误就返回失败，阻止提交
         }
     }
     return true;                         //一个都没错就返回成功执行提交
 };
 
 CheckForm.Field = function(params){
	      this.fieldId=params.fieldId;     //要验证的字段的ID
	      this.validators=params.validators;   //验证器对象数组
	      this.onSuccess=params.success;       //当验证成功的时候执行的事件
	      this.onError=params.error;     //当验证失败的时候执行的事件
	      this.checked=false;           //是否通过验证
	      if(typeof(params.checktype)=="undefined"){
	         this.checktype="and";
	      }else{
	    	  if(params.checktype=="or"){
	    		  this.checktype="or";
	    	  }else{
	    		  this.checktype="and";
	    	  }
	      }
	 };

CheckForm.Field.notNullFlag = "*  ";

CheckForm.Field.prototype.validate=function(){
	      //循环每一个验证器,type=and 一旦有一个失败就停止， type=or，一旦有一个成功就停止
	     if(this.checktype=="and"){
	      for(var item in this.validators){
	          //给验证器附加验证成功和验证失败的回调事件
	          this.setCallback(this.validators[item]);
	         //执行验证器上的Validate方法，验证是否符合规则
	          if(!this.validators[item].validate(this.data())){
	              break; //一旦任意一个验证器失败就停止
	          }
	       }
	     }else{
	    	 for(var item in this.validators){
		          //给验证器附加验证成功和验证失败的回调事件
		          this.setCallback(this.validators[item]);
		         //执行验证器上的Validate方法，验证是否符合规则
		          if(this.validators[item].validate(this.data())){
		              break; //一旦任意一个验证器成功就停止
		          }
		       }
	     }

       if(this.checked){
         this.onSuccess("");  //执行验证成功的事件 [无消息内容]
       }
	 };
  //获取字段值的方法
CheckForm.Field.prototype.data=function(){
      return $('#'+this.fieldId).val();
};

CheckForm.Field.prototype.setCallback=function(validator){
      var self=this;              //换一个名字来存储this，不然函数的闭包中会覆盖这个名字
      validator.onSuccess=function(){      //验证成功执行的方法
          self.checked=true;      //将字段设置为验证成功        
          //self.onSuccess(validator.message);  //执行验证成功的事件
      };
      validator.onError=function(){    //验证失败的时候执行的方法
          self.checked=false;     //字段设置为验证失败
          self.onError(validator.message);//执行验证失败的事件
     };
 };
 
//验证器实现
//长度验证的验证器类
 CheckForm.LengthValidtor = function(min,max,message){
     this.min=min;
     this.max=max;
     this.message=message;
     this.onSuccess=null;
     this.onError=null;
 };
CheckForm.LengthValidtor.prototype.validate=function(data){
     if(data.length < this.min||data.length > this.max){
         this.onError();
         return false;
     }
     this.onSuccess();
     return true;
 };
 //正则表达式验证器
CheckForm.RegexValidtor = function(expression,message){
     this.expression=expression;
     this.message=message;
     this.onSuccess=null;
     this.onError=null;
 };
CheckForm.RegexValidtor.prototype.validate=function(data){
     if(this.expression.test(data)){
         this.onSuccess();
         return true;
     }else{
         this.onError();
         return false;
     }
 };

 //正则表达式验证器
 CheckForm.RegexValidtorAllowNull = function(expression,message){
      this.expression=expression;
      this.message=message;
      this.onSuccess=null;
      this.onError=null;
  };
 CheckForm.RegexValidtorAllowNull.prototype.validate=function(data){
     if(!data){
         this.onSuccess();
         return true;
     }
      if(this.expression.test(data)){
          this.onSuccess();
          return true;
      }else{
          this.onError();
          return false;
      }
  };