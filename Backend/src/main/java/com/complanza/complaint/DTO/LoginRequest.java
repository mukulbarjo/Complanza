package com.complanza.complaint.DTO;

import lombok.Data;

@Data
public class LoginRequest {
    
    private String email;
    private String password;

}
//to capture login form data (email + password)

