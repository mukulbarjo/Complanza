package com.complanza.complaint.Config;

import com.complanza.complaint.Entity.User;
import com.complanza.complaint.Enum.Role;
import com.complanza.complaint.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminInitializer {

    @Bean
    public CommandLineRunner createAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (!userRepository.existsByEmail("admin@complanza.com")) {
                User admin = new User();
                admin.setName("Admin");
                admin.setEmail("admin@complanza.com");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRole(Role.ADMIN); // ✅ Correct for enum


                userRepository.save(admin);
                System.out.println("✅ Default admin user created.");
            } else {
                System.out.println("✅ Admin already exists.");
            }
        };
    }
}
