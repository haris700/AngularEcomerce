import { Component } from '@angular/core';
import { CrudserviceService } from './crudservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public service:CrudserviceService){
    service.getProducts()

  }
  title = 'angularecomerce';
}
