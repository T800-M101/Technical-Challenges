import { computed, effect, Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/car-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {
private _items = signal<CartItem[]>([]);
  items = this._items.asReadonly();

  count = computed(() => this._items().reduce((acc, item) => acc + item.quantity, 0));
  subtotal = computed(() => this._items().reduce((acc, item) => acc + (item.price * item.quantity), 0));
  tax = computed(() => this.subtotal() * 0.16);
  total = computed(() => this.subtotal() + this.tax());

  constructor() {
    const savedCart = localStorage.getItem('cart_storage');
    if (savedCart) {
      try {
        this._items.set(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart", e);
      }
    }

    effect(() => {
      const currentItems = this._items();
      localStorage.setItem('cart_storage', JSON.stringify(currentItems));
    });
  }

  addToCart(product: Product) {
    this._items.update(items => {
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        return items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  removeItem(productId: number) {
    this._items.update(items => items.filter(item => item.id !== productId));
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
    } else {
      this._items.update(items =>
        items.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }

  clearCart() {
    this._items.set([]);
  }

}
