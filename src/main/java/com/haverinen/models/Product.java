package com.haverinen.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Date;

@Entity
@Table(name="products")
public class Product {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="product_id", unique = true, updatable = false)
    private Integer Id;

    @Column(name="name", nullable = false)
    @NotBlank(message = "mandatory field")
    private String name;

    @Column(name="description", nullable = true)
    private String description;

    @Column(name="price", nullable = false)
    private Integer price;

    @Column(name="location", nullable = false)
    private String location;

    @Column(name="image", nullable = true)
    private String image;

    @Column(name="console", nullable = true)
    private String console;

    @Column(name="application_user", nullable = true)
    private String owner;

    @Column(name="contact", nullable = false)
    @NotBlank(message = "mandatory field")
    private String contact;

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Product() {
    }

    public Product(Integer id, String name, String description, Integer price, String location, String image, Date date, String console, String owner) {
        Id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.location = location;
        this.image = image;
        this.console = console;
        this.owner = owner;
        this.contact = contact;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getConsole() {
        return console;
    }



    public void setConsole(String console) {
        this.console = console;
    }

    /*
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    */

}
