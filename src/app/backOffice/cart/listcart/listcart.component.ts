import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/cart/cart.service';

@Component({
  selector: 'app-listcart',
  templateUrl: './listcart.component.html',
  styleUrls: ['./listcart.component.css']
})
export class ListcartComponent {
  carts!:any[];
  constructor(private service:CartService){}

  ngOnInit(): void {
    this.service.getcarts().subscribe(res => {
      console.log(res)
      this.carts=res})
}
}
