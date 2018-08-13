// JavaScript Document
var Constants = {
		//邮箱验证正则
		emailRegx : /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
		//手机号码验证
		mobilephoneRegex : /^1[0-9]{10}$/,
		//邮编验证
		zipcodeRegex : /^[1-9][0-9]{5}$/,
		//非负整数
		integerRegex : /^(0|[1-9]\d*)$/,
		//正整数
		integerPlusRegex : /^[1-9]\d*$/,
		//正数，最多保留两位小数
		numberPlusRegex : /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/,
		//数字，最多保留两位小数
		numberRegex : /^(([1-9]\d*)|0)(\.\d{1,2})?$/,
		//匹配数字字母
		numberLettersRegex : /^[A-Za-z0-9]+$/,
		//固定电话验证正则
		telephoneRegex : /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/
};