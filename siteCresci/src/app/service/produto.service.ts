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
    return this.http.get('http://localhost:8080/produtos', this.token);
  }

  postProduto(produto: Produto) {
    return this.http.post('http://localhost:8080/produtos/cadastrar', produto, this.token);
  }

  getByIdProduto(id: number){
    return this.http.get(`http://localhost:8080/produtos/${id}`, this.token);
  }

  getByCategoriaProduto(categoria: string){
    return this.http.get(`http://localhost:8080/produtos/categoria/${categoria}`, this.token);
  }

  getByTituloProduto(titulo: string){
    return this.http.get(`http://localhost:8080/produtos/nome/${titulo}`, this.token);
  }

  getByTamanhoProduto(tamanho: string){
    return this.http.get(`http://localhost:8080/produtos/nome/${tamanho}`, this.token);
  }

  getByPrecoProduto(preco: number){
    return this.http.get(`http://localhost:8080/produtos/nome/${preco}`, this.token);
  }

  deleteById(id: number){
    return this.http.delete(`http://localhost:8080/produtos/${id}`, this.token);
  }
}
