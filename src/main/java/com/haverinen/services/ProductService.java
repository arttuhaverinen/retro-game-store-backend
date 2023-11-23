package com.haverinen.services;

import com.haverinen.models.Product;
import com.haverinen.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public String addNewProduct(List<Product> product) {
        try {
            productRepository.saveAll(product);
        } catch (Exception e) {
            return "Adding your product failed";
        }
        return "Product saved succesfully";
    }


}
