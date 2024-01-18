import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {WebsiteService} from "../../websiteService";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input()
  item:any = null;

  productUuid:string = "";
  amount:number = 0;

  //this is the product that corresponds to the productUuid
  productName = "Name";
  productPrice = "price";
  productAmount:number = 0;
  productImg = "img";
  productToken = "token";
  cartToken = "cartToken";

  correspondingProduct:any = null;

  websiteService = new WebsiteService();
  baseUrl = this.websiteService.getBaseUrl();

  constructor(private http: HttpClient, private cookie: CookieService) {
    //sleep for products to load
    setTimeout(() => {
      this.productUuid= this.item.productUuid;
      this.amount = this.item.amount;
      // console.log("productUuid: " + this.productUuid + " amount: " + this.amount);
      this.getMatchingProduct(this.productUuid);
    }, 1);

    setTimeout(() => {
      //Load product data
      this.productName = this.correspondingProduct[0].productName;
      this.productPrice = this.correspondingProduct[0].productPrice;
      this.productAmount = this.amount;
      this.productImg = this.correspondingProduct[0].productImageURL;
      this.productToken = this.correspondingProduct[0].productToken;
      this.cartToken = this.correspondingProduct[0].token;

      // console.log(this.correspondingProduct);
    } , 100);
  }


  endpointProductSearchByUuid = "/api/v1/product/uuid"
  getMatchingProduct(productUuid:string){
    let url = this.baseUrl + this.endpointProductSearchByUuid;
    let data = productUuid;

    this.http.post(url, data).subscribe((response) =>{
      this.correspondingProduct = response;
    } , (error) =>{
      console.log(error);
    } );
  }

  removeFromCart(productUuid: string) {
    let url = this.baseUrl + "/api/v1/cart/remove";
    let data = {
      "cartUuid": this.cartToken,
      "sessionUuid": this.cookie.get("token")
    }

    console.log(data);

    this.http.post(url, data).subscribe((response) =>{
      // console.log(response);
      window.location.reload();
    }, (error) =>{
      console.log(error);
    });
  }
}
