import {Component, Input, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.css'
})
export class ShopItemComponent {
  @Input()
  product : any;
// {
//   "productID": 1,
//   "productName": "iPhone3000",
//   "productPrice": "1000",
//   "productImageURL": "https://apple.com/iphone",
//   "productDescription": "A normal phone for a huge price!",
//   "productQuantity": "10"
// }


  constructor(private http: HttpClient, private cookie: CookieService) {
  }


  previewProduct(){
    console.log("Open popup for product: " + this.product.productName);
    //todo: open open popup to display product bigger.
    console.log(this.product);
  }


  baseUrl = "http://127.0.0.1:8080/"
  endpointLoginAccount = "api/v1/cart"
  addToCart(){
    // console.log("Add product to cart: " + this.product.productName);
    //todo: add to cart
    //maybeTodo: open cart at the side of the window

    let url = this.baseUrl + this.endpointLoginAccount;
    let sessionToken = this.cookie.get("token");
    let productUuid = this.product.token;

    let data = {
      "accountUuid": sessionToken,
      "productUuid": productUuid,
      "amount": 1
    }

    console.log(data);

    this.http.post(url, data).subscribe((response) =>{
      // console.log(response);
      console.log("Product added to cart");
      //message: "Product added to cart"
    } , (error) => {
      console.log(error);
      //message: "Something went wrong!"
    });

  }


}
