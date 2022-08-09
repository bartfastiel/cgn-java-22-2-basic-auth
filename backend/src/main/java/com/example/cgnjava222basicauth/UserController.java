package com.example.cgnjava222basicauth;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/users")
class UserController {

    @GetMapping("me")
    String getUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
