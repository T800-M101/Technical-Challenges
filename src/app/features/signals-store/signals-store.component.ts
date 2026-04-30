import { Component, inject } from '@angular/core';
import { CartStoreService } from '../../core/services/cart-service/cart-store.service';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../products-list/products-list.component';
@Component({
  selector: 'app-signals-store',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './signals-store.component.html',
  styleUrl: './signals-store.component.css'
})
export class SignalsStoreComponent {
  store = inject(CartStoreService);

}
