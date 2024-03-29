package com.haverinen.services;

import com.haverinen.models.ApplicationUser;
import com.haverinen.models.LoginResponseDTO;
import com.haverinen.models.Role;
import com.haverinen.repository.RoleRepository;
import com.haverinen.repository.UserRepository;
import org.antlr.v4.runtime.Token;
import org.postgresql.util.PSQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passWordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public ApplicationUser registerUser(String username, String password) throws Exception {
        try {
            String encodedPassword = passWordEncoder.encode(password);
            Role userRole = roleRepository.findByAuthority("USER").get();
            Set<Role> authorities = new HashSet<>();
            authorities.add(userRole);
            return userRepository.save(new ApplicationUser(0, username, encodedPassword, authorities, null));
        } catch (Exception e) {
            System.out.println("registration failed!");
            throw new Exception(){};
        }
    }

    public LoginResponseDTO loginUser(String username, String password) {

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );
            String token = tokenService.generateJwt(auth);
            return new LoginResponseDTO(userRepository.findByUsername(username).get(), token);
        }catch (AuthenticationException e) {
            //return new LoginResponseDTO(null, "");
            System.out.println("login error");
            throw new AuthenticationException("Wrong username or password") {
            };

        }
    }

}
