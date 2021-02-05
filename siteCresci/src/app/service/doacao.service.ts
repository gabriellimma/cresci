import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doacao } from '../model/Doacao';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private http: HttpClient) { }

  
  getAllDoacao(){
    return this.http.get('https://cresci-api.herokuapp.com/doacao');
  }

  postDoacao(doacao: Doacao) {
    return this.http.post('https://cresci-api.herokuapp.com/doacao', doacao);
  }
  
}
