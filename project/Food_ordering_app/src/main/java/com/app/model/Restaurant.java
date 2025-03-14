package com.app.model;

//Restaurant.java
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "restaurants")
public class Restaurant {
 @Id
 private String id;
 private String restaurantName;
 private String email;
 private String password;
 private String phone;
 private String address;
 private String city;
 private String state;
 private String zip;
 private String otherBranches;
 private String cuisineType;
 private List<Dish> dishes;
 private String openingHours;
}