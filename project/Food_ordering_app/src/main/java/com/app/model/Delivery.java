// Delivery.java
package com.app.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "delivery")
public class Delivery {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String phone;
    private String vehicleType;
    private String vehicleNumber;
    private String workingHours;
    private String deliveryAreas;
}