package com.app.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.app.model.Product;
import com.app.repo.ProductRepository;
import com.app.repo.ProductRepository.myView;
import java.util.List;
import java.util.Scanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class MyRunner implements CommandLineRunner {
    
    private final static Logger LOGGER = LoggerFactory.getLogger(MyRunner.class);

    @Autowired
    private ProductRepository repo;
    
    @Override
    public void run(String... args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number of products to insert: ");
        int count = scanner.nextInt();
        scanner.nextLine(); // Consume the newline
        
        for (int i = 0; i < count; i++) {
            System.out.println("Enter Product ID: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // Consume the newline
            
            System.out.println("Enter Product Name: ");
            String name = scanner.nextLine();
            
            System.out.println("Enter Product Vendor Code: ");
            String vendorCode = scanner.nextLine();
            
            System.out.println("Enter Product Cost: ");
            double cost = scanner.nextDouble();
            scanner.nextLine(); // Consume the newline
            
            Product product = new Product(id, vendorCode,name, cost);
            repo.save(product);
        }

        // Fetch and print data from MongoDB
        System.out.println("Fetching data from Mysql...");
        List<myView> products = repo.findByVendorCode("AB");  // Change vendor code as needed
        for (myView p : products) {
            System.out.println(p.getVendorCode() + ", " + p.getProdName() + ", " + p.getProdCost());
        }

        scanner.close();
    }
}
