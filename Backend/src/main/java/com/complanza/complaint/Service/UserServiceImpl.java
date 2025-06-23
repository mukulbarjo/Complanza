package com.complanza.complaint.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.complanza.complaint.Entity.User;
import com.complanza.complaint.Repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    // Get user by email
    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
    }

    // Get all users (admin can view this)
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by ID
    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
}
// is used to fetch and manage user data beyond login, such as profile, dashboard, and admin/user-related operations.







