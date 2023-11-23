package com.haverinen.controllers;

import com.haverinen.models.Product;
import com.haverinen.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("products")
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping("/")
    public List<Product> getProducts() {
        return productService.getProducts();
    }
    @GetMapping
    public String getProductsTest() {
        return "getProductsTest";
    }
    @PostMapping("/")
        public String postProduct(@RequestBody List<Product> product) {
            String result = productService.addNewProduct(product);
            return result;
        }




}
