import { Component, OnInit } from '@angular/core';
import { Cart, CrudserviceService } from 'src/app/crudservice.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CrudserviceService],
})
export class HomeComponent implements OnInit {
  products: any = [];

  constructor(public crudService: CrudserviceService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.crudService.getProducts().then((snapshot: any) => {
      const data = snapshot.docs.map((doc: any) => {
        console.log(doc, 'doc');

        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(data);

      this.products = data;
    });
  }
}

export interface Product {
  id: string;
  image: string;
  title: string;
  description?: string | null;
  price: number;
}
