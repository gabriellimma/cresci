import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doacao } from '../model/Doacao';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private http: HttpClient) { }

  
  getAllDoacao(){
    return this.http.get('http://localhost:8080/doacao');
  }

  postDoacao(doacao: Doacao) {
    return this.http.post('http://localhost:8080/doacao', doacao);
  }
  
}
