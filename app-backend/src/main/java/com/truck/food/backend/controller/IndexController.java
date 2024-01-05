package com.truck.food.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Jacky Wu
 */
@RestController
@RequestMapping("")
public class IndexController {
    @GetMapping(value = "", produces = "application/json")
    public String index() {
        return "Hello world";
    }
}
