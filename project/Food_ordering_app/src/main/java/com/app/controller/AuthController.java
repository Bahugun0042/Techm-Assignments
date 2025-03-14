package com.app.controller;

import java.util.HashMap;
import java.util.Map;

import com.app.model.Customer;
import com.app.model.Delivery;
import com.app.model.Restaurant;
import com.app.services.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Customer Registration
    @PostMapping("/register/customer")
    public ResponseEntity<Customer> registerCustomer(@RequestBody Customer customer) {
        return ResponseEntity.ok(authService.registerCustomer(customer));
    }

    // Restaurant Registration
    @PostMapping("/register/restaurant")
    public ResponseEntity<Restaurant> registerRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(authService.registerRestaurant(restaurant));
    }

    // Delivery Registration
    @PostMapping("/register/delivery")
    public ResponseEntity<Delivery> registerDelivery(@RequestBody Delivery delivery) {
        return ResponseEntity.ok(authService.registerDelivery(delivery));
    }
    
    // Customer Login
    @PostMapping("/login/customer")
    public ResponseEntity<Map<String, Object>> loginCustomer(@RequestBody Map<String, String> loginRequest, HttpSession session) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        Customer user = authService.loginCustomer(email, password);
        if (user != null) {
            session.setAttribute("user", user);

            // Create JSON response
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Customer login successful!");
            response.put("userId", user.getId());
            response.put("name", user.getName());
            response.put("role", "customer");
            response.put("email", user.getEmail());

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid credentials"));
        }
    }

    // Restaurant Login
    @PostMapping("/login/restaurant")
    public ResponseEntity<Map<String, Object>> loginRestaurant(@RequestBody Map<String, String> loginRequest, HttpSession session) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        Restaurant restaurant = authService.loginRestaurant(email, password);
        if (restaurant != null) {
            session.setAttribute("restaurant", restaurant);

            // Create JSON response
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Restaurant login successful!");
            response.put("restaurantId", restaurant.getId());
            response.put("restaurantName", restaurant.getRestaurantName());
            response.put("role", "restaurant");
            response.put("email", restaurant.getEmail());

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid credentials"));
        }
    }
    
    // Delivery Login
    @PostMapping("/login/delivery")
    public ResponseEntity<Map<String, Object>> loginDelivery(@RequestBody Map<String, String> loginRequest, HttpSession session) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        Delivery del = authService.loginDelivery(email, password);
        if (del != null) {
            session.setAttribute("delivery", del);

            // Create JSON response
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Restaurant login successful!");
            response.put("deliveryId", del.getId());
            response.put("deliveryName", del.getName());
            response.put("role", "delivery");
            response.put("email", del.getEmail());

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid credentials"));
        }
    }

    // Logout (for both customers and restaurants)
    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logged out successfully!");
    }
}
