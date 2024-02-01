package com.haverinen.controllers;

import com.haverinen.models.ApplicationUser;
import com.haverinen.models.LoginResponseDTO;
import com.haverinen.models.RegistrationDTO;
import com.haverinen.services.AuthenticationService;
import com.nimbusds.jose.shaded.gson.JsonObject;
import org.postgresql.util.PSQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @GetMapping("/")
    public String test() {
        return "auth/register";
    }

    @PostMapping("/")
    public ApplicationUser registerUser(@RequestBody RegistrationDTO body) throws Exception {
        System.out.println(body);
        return authenticationService.registerUser(body.getUsername(), body.getPassword());

    }

    @PostMapping("/test")
    public String authtest(){
        System.out.println("/auth/test");
        return "test";
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) throws AuthenticationException {
        System.out.println(body);
        System.out.println("auth" + authenticationService.loginUser(body.getUsername(), body.getPassword()));
        return authenticationService.loginUser(body.getUsername(), body.getPassword());

    }



}
