import { Component, OnInit } from '@angular/core';
import { Product } from '../home/home.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders:Product[]=[
  // {
//   image:'../../../assets/falooda.jpg',
//   title:'Falooda',
//   price:120

// },
// {
//   image:'../../../assets/chickenclub.jpg',
//   title:'Chickenclub',
//   price:100

// },
// {
//   image:'../../../assets/bluemojito.jpg',
//   title:'Blue Mojito',
//   price:70

// },
]
  constructor() { }

  ngOnInit(): void {
  }

}
