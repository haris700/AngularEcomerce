import { Component, Input, OnInit } from '@angular/core';
import { CrudserviceService } from 'src/app/crudservice.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;

  updateCart() {
    this.service.updateCart(this.cartItem);
  }

  cartQuantityinc() {
    this.cartItem.quantity++;
    this.updateCart();
  }
  cartQuantitydec() {
    if (this.cartItem.quantity == 1) return;

    this.cartItem.quantity--;

    this.updateCart();
  }
  constructor(public service: CrudserviceService) {}

  ngOnInit(): void {}
}
