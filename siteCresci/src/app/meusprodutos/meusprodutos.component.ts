import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meusprodutos',
  templateUrl: './meusprodutos.component.html',
  styleUrls: ['./meusprodutos.component.css']
})
export class MeusprodutosComponent implements OnInit {

  listaProdutos: Produto[];
  produto: Produto = new Produto;
  id:number;

  constructor(private ProdutoService : ProdutoService, private router: Router) { }

  ngOnInit(): void {
    
    this.findallProdutos()
    window.scroll(0,0)
  }

  findallProdutos(){
    this.ProdutoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  findByIdProduto(id: number){
    this.ProdutoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    }, err => {alert("Opa, parece que não conseguimos encontrar esse item"), console.log(err)})
  }


}
