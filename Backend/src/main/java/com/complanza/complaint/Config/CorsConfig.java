package com.complanza.complaint.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    /**
     * This bean enables CORS globally for the application.
     * It allows frontend (localhost:4200) to communicate with backend (localhost:8080).
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Apply to all endpoints
                        .allowedOrigins("http://localhost:4200") // Allow frontend origin
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed HTTP methods
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(true); // Send cookies or authorization headers
            }
        };    }
}

//Why do we need CorsConfig?	To allow Angular frontend (different origin) to call Spring Boot APIs.
//By default, the browser blocks frontend apps (like Angular) from calling APIs that are hosted on a different domain/port (like Spring Boot).
//