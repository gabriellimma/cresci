import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[]
  produto: Produto = new Produto;
  id:number;

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

  findByIdProduto(id: number){
    this.ProdutoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    }, err => {})
  }


}
