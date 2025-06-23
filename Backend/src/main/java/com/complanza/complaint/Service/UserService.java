package com.complanza.complaint.Service;

import java.util.List;
import java.util.Optional;

import com.complanza.complaint.Entity.User;

public interface UserService {

    User getUserByEmail(String email);

    List<User> getAllUsers();

    Optional<User> getUserById(Long id);


}
//his interface defines what a UserService should do — find user by email/ID, list users, etc.