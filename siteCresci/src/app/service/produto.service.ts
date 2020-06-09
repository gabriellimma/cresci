import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProdutos() {
    return this.http.get('http://93.188.161.223:9000/user');
  }

  postProduto(usuario: Produto) {
    return this.http.post('http://93.188.161.223:9000/user', usuario);
  }
}
