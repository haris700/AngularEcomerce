import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
primary:string='#3f51b5'
  constructor() { }

  ngOnInit(): void {
  }

}
