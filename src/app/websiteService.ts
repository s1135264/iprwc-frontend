
export class WebsiteService{
  //import door het volgende te doen:
  //websiteService = new WebsiteService();


  //base url
  // baseUrl = "http://localhost:4200";
  private baseUrl = 'http://188.166.118.19:8080';

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
