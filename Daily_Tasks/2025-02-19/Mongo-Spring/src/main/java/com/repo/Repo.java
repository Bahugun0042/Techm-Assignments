package com.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.model.Product;

public interface Repo extends MongoRepository<Product, String> {
}