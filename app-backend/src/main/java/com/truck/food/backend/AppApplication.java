package com.truck.food.backend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author Jacky
 */
@SpringBootApplication
@MapperScan(basePackages = "com.truck.food.**.mapper")
@EntityScan(basePackages = "com.truck.food.**.entity")
public class AppApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(AppApplication.class, args);
    }
}