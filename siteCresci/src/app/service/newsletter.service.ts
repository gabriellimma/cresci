import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Newsletter } from '../model/Newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) { }

  postEmail(newsletter: Newsletter) {
    return this.http.post('http://localhost:8080/newsletter', newsletter);
  }
  
}
