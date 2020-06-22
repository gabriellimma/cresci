import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProdutos() {
    return this.http.get('http://localhost:8080/produtos');
  }

  postProduto(produto: Produto) {
    return this.http.post('http://93.188.161.223:9000/user', produto);
  }

  getByIdProduto(id: number){
    return this.http.get(`http://localhost:8080/produtos/${id}`);
  }

  getByCategoriaProduto(categoria: string){
    return this.http.get(`http://localhost:8080/produtos/categoria/${categoria}`);
  }

  getByTituloProduto(titulo: string){
    return this.http.get(`http://localhost:8080/produtos/nome/${titulo}`);
  }

  getByTamanhoProduto(tamanho: string){
    return this.http.get(`http://localhost:8080/produtos/nome/${tamanho}`);
  }

  getByPrecoProduto(preco: number){
    return this.http.get(`http://localhost:8080/produtos/nome/${preco}`);
  }

  deleteById(id: number){
    return this.http.delete(`http://localhost:8080/produtos/${id}`);
  }
}
