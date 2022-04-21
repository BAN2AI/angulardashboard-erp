import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {


  private Id;
  private cookies = {}
  private urlsource = "http://treater.pharedelafemme.org/";
  constructor(private http: HttpClient) {

  }

   getUserId() {
    return this.Id;
   }

   getCookies() {
    return this.cookies;
   }


   login(id, username, password) {

   }

   //range = all / last five
   getproducts(range) {

   }

   getUsers() {

   }

   getTransactions() {

   }

   getProductsCategories() {

   }

   getVentes() {

   }

   getCommandes() {

   }

   getDepenses() {

   }

   getCategoriesOfDepenses() {

   }

   getQuotations() {

   }

   getTransferts() {

   }

   getRetours() {

   }




}
