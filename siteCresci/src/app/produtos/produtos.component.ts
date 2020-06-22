import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

 listaProdutos: Produto[]
 produto: Produto = new Produto;


  constructor(private ProdutoService : ProdutoService) { }

  ngOnInit(): void {

    this.findallProdutos()
    window.scroll(0,0)

  }

  findallProdutos(){
    this.ProdutoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  findById(){}


  }
