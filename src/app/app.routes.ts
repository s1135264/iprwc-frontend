import { Routes } from '@angular/router';
import {DashboardPageComponent} from "./dashboard/dashboard-page/dashboard-page.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {NotFoundPageComponent} from "./notFound/not-found-page/not-found-page.component";
import {CartComponent} from "./shopping-cart/cart/cart.component";
import {CreateAccountComponent} from "./login/create-account/create-account.component";
import {ForgotPasswordComponent} from "./login/forgot-password/forgot-password.component";
import {ShopComponent} from "./shopFront/shop/shop.component";
import {SellerPageComponent} from "./adminPage/seller-page/seller-page.component";

export const routes: Routes = [
  {path : '', component: DashboardPageComponent, title: 'Dashboard'},
  {path : 'dashboard', component: DashboardPageComponent, title: 'Dashboard'},
  {path : 'login-page', component: LoginPageComponent, title: 'Login'
    // ,
    // children: [
    //   {path: 'create-account', component: CreateAccountComponent, title: 'Create Account'}
    // ]
  },
  {path : 'login-page/create-account', component: CreateAccountComponent, title: 'Create Account'},
  {path : 'login-page/reset', component: ForgotPasswordComponent, title: 'Reset Password'},
  {path : 'cart', component: CartComponent, title: 'Cart'},
  {path : 'shop', component: ShopComponent, title: 'Shop'},
  {path : 'seller', component: SellerPageComponent, title: 'Seller/Admin page'},


  {path : '**', component: NotFoundPageComponent, title: 'Page Not Found'}
];
