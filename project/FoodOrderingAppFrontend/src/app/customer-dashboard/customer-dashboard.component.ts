import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { CartService } from '../services/cart.service'; // Import CartService

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  searchQuery: string = '';
  cartItemCount: number = 0;
  userName: string = '';
  dishes = [
    {
      id: 1,
      name: 'Pasta',
      description: 'Creamy Alfredo Pasta',
      price: 12.99,
      restaurant: 'Italian Bistro',
      image: 'https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp',
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Margherita Pizza',
      price: 10.99,
      restaurant: 'Italian Bistro',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg',
    },
    {
      id: 3,
      name: 'Fried Rice',
      description: 'Vegetable Fried Rice',
      price: 8.99,
      restaurant: 'Chinese Delight',
      image: 'https://cicili.tv/wp-content/uploads/2024/08/Chicken-Fried-Rice-Small-2-1200x900.jpg',
    },
    {
      id: 4,
      name: 'Chicken Nuggets',
      description: 'Crispy Chicken Nuggets',
      price: 7.99,
      restaurant: 'Chinese Delight',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYhpejycIfIM0TsLnAJJnkGTMqOxsuAq_cw&s',
    },
    {
      id: 5,
      name: 'French Fries',
      description: 'Aloo chips with tomato ketchup',
      price: 4.99,
      restaurant: 'SS Makers',
      image: 'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
    },
    {
      id: 6,
      name: 'Butter Chicken',
      description: 'Creamy butter chicken served with naan',
      price: 14.99,
      restaurant: 'Indian Tandoor',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/butter-chicken.jpg',
    }
  ];

  filteredDishes = [...this.dishes]; // Initialize with all dishes

  constructor(
    private router: Router,
    private cartService: CartService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.userName = localStorage.getItem('name') || '';
      console.log('User Name:', this.userName); // Debugging
      alert('Welcome ' + this.userName);
    }

    this.cartItemCount = this.cartService.getCartItemCount();
  }
  onSearch() {
    this.filteredDishes = this.dishes.filter((dish) =>
      dish.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      dish.restaurant.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(this.searchQuery.toLowerCase()) // Added description search
    );
  }

  addToCart(dish: any) {
    console.log('Adding dish to cart:', dish); // Debugging
    this.cartService.addToCart(dish);
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  navigateToCart() {
    this.router.navigate(['/customer/cart']);
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('name'); // Also clear name
    this.router.navigate(['/login']);
  }
}
