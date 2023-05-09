import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productId!: number;
  userId!: string;
  quantity!: number;
  response!: string;
  cartId!: number;

  constructor(private http: HttpClient) { }

  addProductToCart() {
    const url = `http://localhost:9005/cart/addProductToCart/${this.productId}/${this.userId}/${this.quantity}`;
    this.http.post<string>(url, null, {withCredentials: true}).subscribe(data => {
      this.response = data;
      console.log(data);
    });
  }
  
}
