import { Component } from '@angular/core';
import {NavigationBarComponent} from "../../dashboard/navigation-bar/navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ShopItemComponent} from "../shop-item/shop-item.component";
import {NgForOf} from "@angular/common";
import {WebsiteService} from "../../websiteService";


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NavigationBarComponent,
    ShopItemComponent,
    NgForOf
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  filter = "";

  websiteService = new WebsiteService();
  baseUrl = this.websiteService.getBaseUrl();

  getProductsURL = this.baseUrl + '/api/v1/product';
  productList:any = [];




  constructor(private router: Router) {
    //subscribe to router events
    this.router.events.subscribe((val) => {//todo:fix errors in console
      // this.filter = this.getQueryParams();

      //load products
      // this.getProducts(this.filter);



      setTimeout(() => {
        this.filter = this.getQueryParams();
        this.getProducts(this.filter);
        console.log(this.productList);
      }, 50);

    });//todo:fix errors in console
  }



  //get query params
  getQueryParams() {
    var url = window.location.href;
    if (url.includes("?")){
      var params = url.split('?')[1].split('&');
      var filter = params[0].split('=')[1];
      return filter;
    }
    return"";
  }



  getProducts(typeOfProduct : string)  {

    if (typeOfProduct.length == 0) {
      // console.log("getting products from: " + this.getProductsURL);
      fetch(this.getProductsURL)
        .then(response => response.json())
        .then(data => {
          this.productList = data;
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log("getting products from: " + this.getProductsURL + "/" + typeOfProduct);
      fetch(this.getProductsURL + "/" + typeOfProduct)
        .then(response => response.json())
        .then(data => {
          this.productList = data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

}
