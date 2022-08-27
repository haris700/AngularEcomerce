import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 navigation=(link:any)=>{
  this.activeLink = link;
  this.route.navigateByUrl(`${this.activeLink}`)
}


  links:any=[]
  activeLink:any=null
  background: ThemePalette = undefined;

  constructor( public route:Router) { 
    this.ngOnInit()
  }

  ngOnInit(): void {
   
    if (location.pathname=="/home" ||location.pathname=="/cart"||location.pathname=="/order") {
     this.links=['home','cart','order'];
    } else {
     this.links=['register','login'];
      
    }
     console.log(this.links);
     
     this.activeLink = this.links[0];
  }

 

}
