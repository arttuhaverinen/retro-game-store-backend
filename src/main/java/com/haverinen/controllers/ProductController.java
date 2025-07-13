package com.haverinen.controllers;

import com.haverinen.models.ApplicationUser;
import com.haverinen.models.Product;
import com.haverinen.models.ProductRequestDTO;
import com.haverinen.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

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

    @PostMapping("/")
        public Object postProduct(@RequestBody List<Product> product) throws Exception {
        System.out.println("product" + product);
            Object result = productService.addNewProduct(product);
            return result;
        }


    @GetMapping("/ownproducts")
    public List<Product> getUsersProducts(){
        return productService.getOwnersProducts();
    }

    @DeleteMapping(path = "{id}")
    public String deleteProduct(@PathVariable("id") Integer id) {
        System.out.println("deleting product");
        productService.deleteProducts(id);
        return "deleted id" + id;

    }





}
