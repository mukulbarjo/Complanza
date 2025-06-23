package com.complanza.complaint.Controller;

import com.complanza.complaint.DTO.JwtResponse;
import com.complanza.complaint.DTO.LoginRequest;
import com.complanza.complaint.DTO.RegisterRequest;
import com.complanza.complaint.Service.AuthService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller to handle authentication requests like register and login
 */
@RestController
@RequestMapping("/api/auth") // Base URL for all auth APIs
@RequiredArgsConstructor // Automatically injects AuthService
public class AuthController {

    private final AuthService authService;

    /**
     * Registers a new user
     * @param request contains name, email, and password
     * @return success message
     */
   @PostMapping("/register")
public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
    System.out.println("🚀 [Controller] Incoming request:");
    System.out.println(" - Name: " + request.getName());
    System.out.println(" - Email: " + request.getEmail());
    System.out.println(" - Password: " + request.getPassword());

    String response = authService.register(request);
    return ResponseEntity.ok(response);
}



    /**
     * Logs in an existing user and returns JWT token
     * @param request contains email and password
     * @return JwtResponse with token, email, and role
     */
    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request) {
        JwtResponse jwtResponse = authService.login(request);
        return ResponseEntity.ok(jwtResponse);
    }
}

//POST /api/auth/register	Register a new user	RegisterRequest (name, email, password)
//POST /api/auth/login	Login existing user	LoginRequest (email, password)
