package com.haverinen.controllers;

import com.haverinen.models.ApplicationUser;
import com.haverinen.repository.UserRepository;
import com.haverinen.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/")
    public String helloUserController() {
        return "User access level";
    }

    @PostMapping("/")
    public String test() {return "user access post test";}

    @GetMapping("/all")
    public List<ApplicationUser> testpost() {return userService.getUsers();}


}
