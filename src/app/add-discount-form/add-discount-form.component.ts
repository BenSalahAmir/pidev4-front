import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Discount } from '../discount.model';
import { CartService } from '../Service/cart/cart.service';

@Component({
  selector: 'app-add-discount-form',
  templateUrl: './add-discount-form.component.html',
  styleUrls: ['./add-discount-form.component.css']
})
export class AddDiscountFormComponent {
  newDiscount: Discount = {
    discountCode: '',
    expiryDate: new Date(),
    amount: 0,
    percentage: false,
    discountStatus: '',
    idDiscount: 0,
    userId: null,
    cartId: null
  };
  constructor(private service:CartService,private router: Router) { }
  ngOnInit() {
    this.addDiscount();
  }
  addDiscount() {
    this.service.addDiscount(this.newDiscount).subscribe(
      (data: Discount) => {
        console.log('Discount added:', data);
        this.router.navigate(['/admin/listdiscount']);
        // Optionally, perform any other actions after adding the discount
      },
      (error) => {
        console.error('Error adding discount:', error);
        // Optionally, handle the error
      }
    );
  }
}
