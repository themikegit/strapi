import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartnersApiService {
  constructor(private http: HttpClient) {}

  getAllPartners() {
    return this.http.get('http://localhost:1337/api/partners');
  }

  createPartner(body: any) {
    console.log(body);
    return this.http.post('http://localhost:1337/api/partners', body);
  }
}
