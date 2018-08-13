package com.hxshop.tms.core.service.impl;
import com.hxshop.tms.api.service.HelloService;

public class HelloServiceImpl implements HelloService{

	@Override
	public String sayHello(String name) {
		
		return "Hello git "+name;
	}

}
