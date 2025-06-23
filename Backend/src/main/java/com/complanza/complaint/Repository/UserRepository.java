package com.complanza.complaint.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.complanza.complaint.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    
       //Check if user exists by email (for registration validation)
    boolean existsByEmail(String email);

    //Used during login to find user by email
    Optional<User> findByEmail(String email);
}
