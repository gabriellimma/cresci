import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  getAllProdutos() {
    return this.http.get('https://cresci-api.herokuapp.com/produtos');
  }

  postProduto(produto: Produto) {
    return this.http.post('https://cresci-api.herokuapp.com/produtos/cadastrar', produto, this.token);
  }

  putProduto(produto: Produto) {
    return this.http.put('https://cresci-api.herokuapp.com/produtos/meusprodutos', produto, this.token);
  }

  getByIdProduto(id: number){
    return this.http.get(`https://cresci-api.herokuapp.com/produtos/${id}`);
  }

  getByCategoriaProduto(categoria: string){
    return this.http.get(`https://cresci-api.herokuapp.com/produtos/categoria/${categoria}`);
  }

  getByTituloProduto(titulo: string){
    return this.http.get(`https://cresci-api.herokuapp.com/produtos/nome/${titulo}`);
  }

  getByTamanhoProduto(tamanho: string){
    return this.http.get(`https://cresci-api.herokuapp.com/produtos/nome/${tamanho}`);
  }

  getByPrecoProduto(preco: number){
    return this.http.get(`https://cresci-api.herokuapp.com/produtos/nome/${preco}`);
  }

  deleteById(id: number){
    return this.http.delete(`https://cresci-api.herokuapp.com/produtos/${id}`, this.token);
  }

  deleteProduto(id: number){
    return this.http.delete(`https://cresci-api.herokuapp.com/produtos/${id}`, this.token);
  }
}
