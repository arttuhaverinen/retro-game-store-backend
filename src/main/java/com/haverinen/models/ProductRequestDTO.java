package com.haverinen.models;

public class ProductRequestDTO {
    private ApplicationUser applicationUser;

    public ProductRequestDTO() {
    }

    public ProductRequestDTO(ApplicationUser applicationUser) {
        this.applicationUser = applicationUser;
    }

    public ApplicationUser getApplicationUser() {
        return applicationUser;
    }

    public void setApplicationUser(ApplicationUser applicationUser) {
        this.applicationUser = applicationUser;
    }
}
