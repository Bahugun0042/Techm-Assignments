package com.app.services;
import com.app.repository.RestaurantRepository;
import com.app.model.Customer;
import com.app.model.Delivery;
import com.app.model.Restaurant;
import com.app.repository.CustomerRepository;
import com.app.repository.DeliveryRepository;
import com.app.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private DeliveryRepository deliveryRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public Customer registerCustomer(Customer customer) {
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        return customerRepository.save(customer);
    }

    public Customer loginCustomer(String email, String password) {
        Customer customer = customerRepository.findByEmail(email);
        if (customer != null && passwordEncoder.matches(password, customer.getPassword())) {
            return customer; // Successful login
        }
        return null; // Invalid credentials
    }
    
    public Restaurant registerRestaurant(Restaurant res) {
        res.setPassword(passwordEncoder.encode(res.getPassword()));
        return restaurantRepository.save(res);
    }

    public Restaurant loginRestaurant(String email, String password) {
    	Restaurant res = restaurantRepository.findByEmail(email);
        if (res != null && passwordEncoder.matches(password, res.getPassword())) {
            return res; // Successful login
        }
        return null; // Invalid credentials
    }
    
    public Delivery registerDelivery(Delivery del) {
        del.setPassword(passwordEncoder.encode(del.getPassword()));
        return deliveryRepository.save(del);
    }

    public Delivery loginDelivery(String email, String password) {
    	Delivery del = deliveryRepository.findByEmail(email);
        if (del != null && passwordEncoder.matches(password, del.getPassword())) {
            return del; // Successful login
        }
        return null; // Invalid credentials
    }
}
