import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  // listaProdutos: Produto []
  produto: Produto = new Produto

  constructor( private ProdutoService : ProdutoService) { }

  ngOnInit(): void {
   // this.findallProdutos()
  }

  // findallProdutos(){
  //   this.ProdutoService.getAllProdutos().subscribe((resp: Produto[])=>{
  //     this.listaProdutos = resp
  //   })
  
  // }

  cadastrar(){
    this.ProdutoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      location.assign('/cadastro-produto')
    })
  }
}
