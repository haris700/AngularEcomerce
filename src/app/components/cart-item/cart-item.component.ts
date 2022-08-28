import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;

  cartQuantityinc() {
    if (this.cartItem.quantity == 1) return;
    this.cartItem.quantity++;
  }
  cartQuantitydec() {
    if (this.cartItem.quantity == 1) return;

    this.cartItem.quantity--;
  }
  constructor() {}

  ngOnInit(): void {}
}
