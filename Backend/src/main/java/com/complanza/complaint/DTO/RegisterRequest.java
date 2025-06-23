package com.complanza.complaint.DTO;

import lombok.Data;

@Data
public class RegisterRequest {
    
    private String name;
    private String email;
    private String password; 
}
// to capture registration form data (name, email, password)