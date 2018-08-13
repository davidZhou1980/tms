package com.hxshop.tms.manager.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hxshop.tms.api.service.HelloService;

@Controller
@RequestMapping("home")
public class HelloController {
	
	@Resource
	private HelloService helloService;
	
	@RequestMapping("/sayHello.htm")
	@ResponseBody
	public String sayHello(@RequestParam(value = "name", required = false) String name){
		if (name == null) {
			name = "dubbo";
		}
		String aa = helloService.sayHello(name);
		System.out.println(aa);
		return aa;
	}
}
