package com.haverinen.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @GetMapping("/")
    public String helloUserController() {
        return "User access level";
    }

    @PostMapping("/")
    public String testpost() {return "user access post test";}

}
