
var CMSNOIMGSIZEINFO="";

/*
 * 1001:  banner: 1-7 返回   1920×480
 * 1002：   brand: 品牌，每个都不一样1-8： 依次返回：
 * 315x138   //310*138
138x138
401x286
168x286
138x138
138x138
315x138   //310*138
138x138

 * 1003： 1007  1011 1015 1018 1023 1027 不建议放图片
 * 
 * 1004： 1008  1012  1016  1020 1024 1028 品牌  1-6 建议  169x59
 * 
 * 1005： 1009  1013  1017  1021  1025  1029中间装饰图  1 显示：  237x359
 * 1006:  1010 1014   1018   1022  1026  1030客厅产品  1-6 依次返回：
 * 269x179
269x179
179x179
179x179
179x179
252x359
 * 
 * 
 * 1031：设计师说： 1-3 建议  198x161
 * 
 * 2001： 统一返回  热卖品牌大小：  80x40
 * 2002： rightFlash区域： 290*200
 * 2003： 热卖大图区域： logo建议大小：  125x60
 * 2004：2005: 普通特卖，最后疯抢大小   287x198
 * 2006：
 * logo大小： 110x50
 * 
 * 品牌特卖大图 显示建议大小：  700x200
 */


function getCMSBannerIMGSize(pos){
	 if(pos<=7){
		 return "800×480";
	 }else{
		 return CMSNOIMGSIZEINFO;
	 }
 }

var CMSBrandIMGSizeARR=["315x138","138x138","401x286","168x286","138x138","138x138","315x138","138x138"];

var CMSProductIMGSizeARR=["269x179","269x179","179x179","179x179","179x179","252x359"];

function getCMSBrandIMGSize(pos){
	if(pos>=1 && pos<=8){
		return CMSBrandIMGSizeARR[pos-1];
	}else{
		return CMSNOIMGSIZEINFO;
	}
}

function getCMSProductIMGSize(pos){
	if(pos>=1 && pos<=6){
		return CMSProductIMGSizeARR[pos-1];
	}else{
		return CMSNOIMGSIZEINFO;
	}
}

function getFloorBrandIMGSize(pos){
	if(pos>=1 && pos<=6){
		return "120x60";
	}else{
		return CMSNOIMGSIZEINFO;
	}
}

function getFloorMiddleIMGSize(pos){
	if(pos==1){
		return "258x359";
	}else{
		return CMSNOIMGSIZEINFO;
	}
}

function getDesignIMGSize(pos){
	//设计师说图片大小
	if(pos>=1 && pos<=10){
		if(pos==4){
			return "590x390";
		}
		if(pos==8 || pos==9){
			return "195x190";
		}
		if(pos==10){
			return "400x390";
		}
		return "190x190";
	}else{
		return CMSNOIMGSIZEINFO;
	}
}

function getHotSellBrandIMGSize(pos){
	return "80x40";
}

function getRightFlashIMGSize(pos){
	return "287x198";
}

function getBigImgIMGSize(pos){
	if(pos>=1 && pos<=6){
		return "125x60";
	}else{
		return CMSNOIMGSIZEINFO;
	}
}

function getNormalIMGSize(pos){
	if(pos>=1 && pos<=4){
		return "287x198";
	}else{
		return CMSNOIMGSIZEINFO;
	}
}

function getFengqiangIMGSize(pos){
	return "287x198";
}

/*
 * cms 建议的图片大小，传入page_div的名称，位置，返回建议大小
 * 如果该位置不被显示，返回    图片不会显示
 */
//this function is not use
function getCMSIMGSize_old(web_page_div_id,pos){
	web_page_div_id=parseInt(web_page_div_id);
	pos=parseInt(pos);
	
	if(web_page_div_id==1001){
		return getCMSBannerIMGSize(pos);
	}
	
	if(web_page_div_id==1002){
		return getCMSBrandIMGSize(pos);
	}
	
	if(web_page_div_id==1031){
		return getDesignIMGSize(pos);
	}
	
	if( web_page_div_id<2000 && (web_page_div_id-1003)%4==0){
		return CMSNOIMGSIZEINFO;
	}
	
	if( web_page_div_id<2000 && (web_page_div_id-1004)%4==0){
		return getCMSProductIMGSize(pos);
	}
	
	if( web_page_div_id<2000 && (web_page_div_id-1005)%4==0){
		return getFloorMiddleIMGSize(pos);
	}
	
	if( web_page_div_id<2000 && (web_page_div_id-1006)%4==0){
		return getCMSProductIMGSize(pos);
	}
	
	if(web_page_div_id==2001){
		return getHotSellBrandIMGSize(pos);
	}
	
	if(web_page_div_id==2002){
		return getRightFlashIMGSize(pos);
	}
	
	if(web_page_div_id==2003){
		return getBigImgIMGSize(pos);
	}
	
	if(web_page_div_id==2004){
		return getNormalIMGSize(pos);
	}
	
	if(web_page_div_id==2005){
		return getFengqiangIMGSize(pos);
	}
	
	if(web_page_div_id==2006){
		return "110x50";
	}
	if(web_page_div_id==12276){
		return "215x132";
	}
	if(web_page_div_id==12277){
		return "294x87";
	}
	if(web_page_div_id==12278){
		return "297x422";
	}
	if(web_page_div_id==12279){
		return "298x425";
	}
	if((web_page_div_id>=7599 && web_page_div_id <= 7601)
		|| (web_page_div_id>=8563 && web_page_div_id <= 8565)
		|| (web_page_div_id>=8572 && web_page_div_id <= 8574)
		|| (web_page_div_id>=8619 && web_page_div_id <= 8621)
		|| (web_page_div_id>=8630 && web_page_div_id <= 8632)
	){
		return getZiPinDaoIMGSize(web_page_div_id,pos);
	}
	return CMSNOIMGSIZEINFO;
}

var ZIPINDAOIMGSIZEINFO = ["1920x350","186x297","380x187","380x100","408x100","199x187","120x60"];

//卧室、客厅、厨房、儿童、卫浴，子频道图片推荐大小
function getZiPinDaoIMGSize(web_page_div_id,pos){
	if(web_page_div_id == 7599 || web_page_div_id == 8563 || web_page_div_id == 8572
		|| web_page_div_id == 8619 || web_page_div_id == 8630){
		if(pos == 1){
			return ZIPINDAOIMGSIZEINFO[0];
		}
	}
	if(web_page_div_id == 7600 || web_page_div_id == 8564 || web_page_div_id == 8573
		|| web_page_div_id == 8620 || web_page_div_id == 8631){
		if(pos == 1 || pos ==4){
			return ZIPINDAOIMGSIZEINFO[1];
		}
		if(pos == 2){
			return ZIPINDAOIMGSIZEINFO[pos];
		}
		if(pos == 3){
			return ZIPINDAOIMGSIZEINFO[pos];
		}
		if(pos == 5){
			return ZIPINDAOIMGSIZEINFO[4];
		}
		if(pos == 6 || pos == 7){
			return ZIPINDAOIMGSIZEINFO[5];
		}
	}
	if(web_page_div_id == 7601 || web_page_div_id == 8565 || web_page_div_id == 8574
		|| web_page_div_id == 8621 || web_page_div_id == 8632){
		return ZIPINDAOIMGSIZEINFO[6];
	}
	return CMSNOIMGSIZEINFO;
}


function getCMSwebDivNameById(web_page_div_id){
	if(web_page_div_id==2003){
		return "热卖大图";
	}
	if(web_page_div_id==2004){
		return "普通特卖";
	}
	if(web_page_div_id==2005){
		return "最后疯抢";
	}
	return "";
}

var newIndexBannerSize="730x400";

var newIndexNoticeSize="1920x130";

var newIndexF1Size=["450x210","240x210","240x210","230x340","230x160","710x325","230x155","230x195","",""];
var newIndexF2Size=["230x380","230x190","710x305","230x180","470x155","470x230","230x230","","",""];
var newIndexF3Size=["470x200","230x200","230x200","230x360","230x160","710x340","230x170","230x180","",""];
var newIndexF4Size=["710x345","470x185","230x150","230x190","470x190","230x190","230x350","","",""];
var newIndexF5Size=["470x190","230x190","230x190","230x385","710x345","230x185","470x150","","",""];

var newChannelBannerSize="730x350";

var newChannelItemTitleSize="1190x50";

//getCMSIMGSize(web_page_id,web_page_div_id,div_title,pos)
function getCMSIMAGESIZE(web_page_id,web_page_div_id,div_title,pos){
	//console.log("web_page_id:"+web_page_id+" web_page_div_id:"+web_page_div_id+"div_title:"+div_title+"pos:"+pos);
	//if is index  banner return 730x400
	//if is web_paeg_div_id F1
	web_page_div_id=parseInt(web_page_div_id);
	if(web_page_div_id==1101){
		return newIndexBannerSize;
	}
	
	if(web_page_div_id==1104){
		if(pos<=10){
			return newIndexF1Size[pos-1];
		}
	}
	
	if(web_page_div_id==1106){
		if(pos<=10){
			return newIndexF2Size[pos-1];
		}
	}
	
	if(web_page_div_id==1108){
		if(pos<=10){
			return newIndexF3Size[pos-1];
		}
	}
	
	if(web_page_div_id==1110){
		if(pos<=10){
			return newIndexF4Size[pos-1];
		}
	}
	
	if(web_page_div_id==1112){
		if(pos<=10){
			return newIndexF5Size[pos-1];
		}
	}
	
	if(web_page_div_id==1120){
		return newIndexNoticeSize;
	}
	
	if(web_page_div_id==1114){
		return getDesignIMGSize(pos);
	}
	
	//channel banner
	if(div_title=="横幅区域"){
		return newChannelBannerSize;
	}
	
	if(div_title.indexOf("标题图片")>0){
		return newChannelItemTitleSize;
	}
	
	return "";
}
