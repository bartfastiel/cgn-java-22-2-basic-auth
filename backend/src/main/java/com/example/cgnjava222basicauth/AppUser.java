package com.example.cgnjava222basicauth;

import org.springframework.data.annotation.Id;

public record AppUser(
        @Id
        String username,
        String passwordHash) {
}
