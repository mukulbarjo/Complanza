package com.complanza.complaint.Enum;

public enum Role {
   
     USER,
    ADMIN
}

//Without this, JPA will store the position/index of the enum (e.g., 0, 1, 2, etc.), which is risky.
//With this, JPA stores the string value (e.g., "ADMIN", "USER"), which is human-readable and safer.