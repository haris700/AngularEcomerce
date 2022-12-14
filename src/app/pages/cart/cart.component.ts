import { Component, OnInit } from '@angular/core';
import { Cart, CrudserviceService } from 'src/app/crudservice.service';
import { Product } from '../home/home.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CrudserviceService],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];

  constructor(public crudService: CrudserviceService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log('cart', this.crudService.getCarts());

    this.crudService.getCarts().then((snapshot: any) => {
      const data = snapshot.docs.map((doc: any) => {
        console.log(doc, 'doc');

        return {
          ...doc.data(),
          docId: doc.id,
        };
      });
      console.log(data);

      this.cartItems = data;
    });
  }
}
