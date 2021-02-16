package com.gateway.traineeproject.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Hiren Khatri
 *
 */
@RestController
@CrossOrigin(origins = "*")
public class HomeController {

	@RequestMapping(value="/",method =RequestMethod.GET)
	public String showHome() {
		return "Home";
	}
	
	@RequestMapping(value="/getUserDetails",method =RequestMethod.GET)
	public String getUserDetails() {
		return "{\"name\":\"Hiren\"}";
	}
} 
