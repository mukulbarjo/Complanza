package com.complanza.complaint.Service;

import com.complanza.complaint.DTO.JwtResponse;
import com.complanza.complaint.DTO.LoginRequest;
import com.complanza.complaint.DTO.RegisterRequest;

public interface AuthService {
    String register(RegisterRequest request);
    JwtResponse login(LoginRequest request);
}
// AuthService used 
//Separate authentication logic from controllers (clean code and single responsibility).
//Centralize login and registration functions in one interface/service.


//register(RegisterRequest request) – Handles user registration, saves user details, and returns a success message to the frontend.

//login(LoginRequest request) – Authenticates user credentials, generates a JWT token, and returns a JwtResponse (token, email, role) to the frontend after successful login.
