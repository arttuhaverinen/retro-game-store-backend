package com.haverinen.services;

import com.haverinen.models.ApplicationUser;
import com.haverinen.models.Product;
import com.haverinen.models.ProductRequestDTO;
import com.haverinen.repository.ProductRepository;
import com.haverinen.repository.UserRepository;
import org.hibernate.sql.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    @Autowired
    private final UserRepository userRepository;

    public ProductService(ProductRepository productRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public List<Product> getOwnersProducts() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        Optional<ApplicationUser> user = userRepository.findByUsername(currentPrincipalName);

        return productRepository.findByOwner(currentPrincipalName);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Object addNewProduct(List<Product> product) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String currentPrincipalName = authentication.getName();
            Optional<ApplicationUser> user = userRepository.findByUsername(currentPrincipalName);

            product.forEach(singleProduct -> {
                singleProduct.setOwner(currentPrincipalName);
            });

            if (user.isEmpty()) {
                productRepository.saveAll(product);
            } else {
                user.get().setProducts(product);
                productRepository.saveAll(product);
                System.out.println(product);

            }
        } catch (Exception e) {
            Map<String, Object> obj = new HashMap<>();
            obj.put("product","saving failed");
            return obj;
        }
            Map<String, Object> obj = new HashMap<>();
            obj.put("product","saved succesfully");
            return obj;
    }

    public ApplicationUser addNewUserProduct(@RequestBody ProductRequestDTO request) {
        System.out.println("request" + request);
        return userRepository.save(request.getApplicationUser());
    }

    public void deleteProducts(Integer id) {
        productRepository.deleteById(id);
    }







}
