package com.app.repository;

//DeliveryRepository.java

import com.app.model.Delivery;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryRepository extends MongoRepository<Delivery, String> {
 Delivery findByEmail(String email);
}