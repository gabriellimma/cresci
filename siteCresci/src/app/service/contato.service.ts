import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  postDoacao(contato: Contato) {
    return this.http.post('https://cresci-api.herokuapp.com/contato', contato);
  }
}
