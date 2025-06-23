package com.complanza.complaint.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {
    
    private String token;
    private String email;
    private String role;
}

//The JwtResponse DTO is used to send data from backend to frontend after a successful login, including the JWT token, user's email, and role.