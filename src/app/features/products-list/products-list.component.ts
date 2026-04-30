import { Component, inject } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { CartStoreService } from '../../core/services/cart-service/cart-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  store = inject(CartStoreService);

  products: Product[] = [
    {
      id: 1,
      name: 'MacBook Pro M3',
      price: 1999,
      category: 'Tech',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Sony WH-1000XM5',
      price: 399,
      category: 'Audio',
      image:
        'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Keychron K2',
      price: 99,
      category: 'Tech',
      image:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
    },
  ];
}
