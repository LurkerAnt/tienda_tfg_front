import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  URL_API = 'http://localhost:4200'

  constructor(private http:HttpClient) { }


  getAllProducts() {
    return this.http.get(`${this.URL_API}/product`);
  }
  addToCart(payload:any) {
    return this.http.post(`${this.URL_API}/cart`, payload);
  }
  getCartItems() {
    return this.http.get(`${this.URL_API}/cart`);
  }
  increaseQty(payload:any) {
    return this.http.post(`${this.URL_API}/cart`, payload);
  }
  emptyCart() {
    return this.http.delete(`${this.URL_API}/cart/empty-cart`);
  } 
}
