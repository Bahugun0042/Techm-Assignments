package com.app.repository;

//CustomerRepository.java

import com.app.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
 Customer findByEmail(String email);
}