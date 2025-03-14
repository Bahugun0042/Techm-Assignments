package com.app.model;
//Dish.java

import lombok.Data;

@Data
public class Dish {
 private String dishName;
 private String description;
 private double price;
 private String picture;
}