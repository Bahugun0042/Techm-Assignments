package com.app.model;

//Customer.java

//Customer.java

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Column;

@Data
@Document(collection = "customers")
public class Customer {
 @Id
 private String id;
 private String name;
 private String email;
 private String password;
 private String phone;
 private String address;
 private String city;
 private String state;
 private String zip;
 private String foodPreferences;
 
 @Column(nullable = false)
 private String role = "customer";  // Default role is "customer"

 // Getters and Setters
 public String getRole() {
     return role;
 }

 public void setRole(String role) {
     this.role = role;
 }
}