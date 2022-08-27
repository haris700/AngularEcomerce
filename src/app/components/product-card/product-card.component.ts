import { Component, Input, OnInit } from '@angular/core';
import { Cart, CrudserviceService } from 'src/app/crudservice.service';
import { Product } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  quantity:number=0;
  @Input() product: any;
  
addToCart(product:Product){

  this.crudService.addCart({
    ...product,
    quantity:this.quantity
  } as Cart)
}


  addButton()
  {
 this.quantity++
  }
  decButton()
  {
    if(this.quantity==0)
    return

    this.quantity--
  }
  constructor(public crudService:CrudserviceService) { }

  ngOnInit(): void {
  }

}
