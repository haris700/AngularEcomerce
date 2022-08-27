import { Component, OnInit } from '@angular/core';
import { Cart, CrudserviceService } from 'src/app/crudservice.service';

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
    this.crudService.getProducts().subscribe((products: any) => {
      this.products = products;
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
