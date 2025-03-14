package com.app.repository;

//RestaurantRepository.java

import com.app.model.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
 Restaurant findByEmail(String email);
}