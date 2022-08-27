import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';



export const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent},
{path:"cart",component:CartComponent},
{path:"order",component:OrderComponent},
// {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
