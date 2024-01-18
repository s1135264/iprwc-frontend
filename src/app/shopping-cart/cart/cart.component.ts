import { Component } from '@angular/core';
import {NavigationBarComponent} from "../../dashboard/navigation-bar/navigation-bar.component";
import {NgForOf} from "@angular/common";
import {CartItemComponent} from "../cart-item/cart-item.component";
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {WebsiteService} from "../../websiteService";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NavigationBarComponent,
    NgForOf,
    CartItemComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:any = [];

  websiteService = new WebsiteService();
  baseUrl = this.websiteService.getBaseUrl();


  constructor(private http: HttpClient, private cookie: CookieService) {

    setTimeout(() => {
      this.getCart();
    } , 10);
  }


  //get cart from server with token
  endpointGetCart = "/api/v1/cart/get"
  getCart(){
    let url = this.baseUrl + this.endpointGetCart;
    let data = this.cookie.get("token");

    this.http.post(url, data).subscribe((response) =>{
      this.cart = response;
    }, (error) =>{
      console.log(error);
    });
  }


}
