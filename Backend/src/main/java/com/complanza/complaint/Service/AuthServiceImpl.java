package com.complanza.complaint.Service;

import com.complanza.complaint.DTO.JwtResponse;
import com.complanza.complaint.DTO.LoginRequest;
import com.complanza.complaint.DTO.RegisterRequest;
import com.complanza.complaint.Entity.User;
import com.complanza.complaint.Enum.Role;
import com.complanza.complaint.Repository.UserRepository;
import com.complanza.complaint.Security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    /**
     * Register a new user
     */
    @Override
    public String register(RegisterRequest request) {
        try {
            System.out.println("📩 Register request received for email: " + request.getEmail());

            if (userRepository.existsByEmail(request.getEmail())) {
                System.out.println("❌ Email already exists: " + request.getEmail());
                throw new RuntimeException("⚠️ Email already in use!");
            }

            System.out.println("➡ name: " + request.getName());
            System.out.println("➡ email: " + request.getEmail());
            System.out.println("➡ password (raw): " + request.getPassword());

            String encodedPassword = passwordEncoder.encode(request.getPassword());

            User user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(encodedPassword)
                    .role(Role.USER)
                    .build();

            userRepository.save(user);

            System.out.println("✅ User registered successfully with email: " + request.getEmail());
            return "User registered successfully!";

        } catch (Exception e) {
    e.printStackTrace(); // or log.error("Registration failed", e);
    throw new RuntimeException("❗ Internal error during registration: " + e.getMessage());
}
    }

    /**
     * Login an existing user and return a JWT token
     */
    @Override
    public JwtResponse login(LoginRequest request) {
        System.out.println("🔑 Login attempt for: " + request.getEmail());

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // ✅ Fixed this line - now it uses username to generate the token
        String token = jwtTokenProvider.generateToken(authentication.getName());

        System.out.println("✅ Token generated for: " + user.getEmail());

        return new JwtResponse(token, user.getEmail(), user.getRole().name());
    }
}
