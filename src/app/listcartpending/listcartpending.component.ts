import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { CartService } from 'src/app/Service/cart/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-listcartpending',
  templateUrl: './listcartpending.component.html',
  styleUrls: ['./listcartpending.component.css']
})
export class ListcartpendingComponent implements OnInit {
  userId = 'a900a796-5fdf-4416-8f25-ac3ea01f9514';
  cartId = 1;
  products!:Product[];
  quantityOrdered!: number;
  productId!: number;
  quantities: { [productId: number]: number } = [];
  quantityO!: Observable<number>;
  data !:any;
  productI = 2;
  total!: number;
  product!:Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
     this.getPendingCartProducts();
     this.calculerMontantTotal();
     
  }

  getPendingCartProducts() {
    this.cartService.getPendingCartProducts(this.userId)
      .subscribe(
        (products: Product[]) => {
          this.products = products;
          console.log(products);
  
          // Call fetchQuantities for each product
           this.products.forEach((product: Product) => {
            this.fetchQuantities(product);
          //   this.cartService.getQuantityOrdered(product.productId, this.userId).subscribe(
          //     (quantity: number) => {
          //       product.qtt = quantity;
          //       console.log(quantity);
          //     },
          //     (error: any) => {
          //       console.error(error);
          //       // Handle the error here, such as setting a default quantity or showing an error message
          //     }
              
          //   );
           });
        },
        (error: any) => {
          console.log(error);
          // Handle the error here, such as setting a default quantity or showing an error message
        }
      );
  }
  
  

  fetchQuantities(product:Product) {
    this.cartService
      .getQuantityOrdered(product.idProduct, this.userId)
      .subscribe(
        (quantity: number) => {
          product.qttordered  = quantity;
        },
        (error: any) => {
          console.error(error);
          // Handle the error here, such as setting a default quantity or showing an error message
        }
      );
  }


getQuantityOrdered(productId: number) {
    this.cartService
      .getQuantityOrdered(productId, this.userId)
      .subscribe(
        (quantity: number) => {
          this.quantities[productId] = quantity;
        },
        (error: any) => {
          console.error(error);
          // Handle the error here, such as setting a default quantity or showing an error message
        }
      );
}
  deleteProductFromCart(cartId: number, productId: number, userId: string) {
    this.cartService.deleteProductFromCart(this.cartId, productId, this.userId).subscribe(
      response => {
        console.log(response);
        console.log(response.body); // log the response body
        // remove the deleted product from the local products array
        const index = this.products.findIndex(p => p.idProduct === productId);
        if (index >= 0) {
          this.products.splice(index, 1);
        }
        this.getPendingCartProducts();
        this.calculerMontantTotal();
      },
      error => {
        console.log(error);
      }
    );
  }
  calculerMontantTotal() {
  this.cartService.calculerMontantTotal(this.cartId).subscribe(
    (total: number) => {
      this.total = total;
    },
    (error: any) => {
      console.error('Error:', error);
    }
  );
  }
  
  
  

  
}
