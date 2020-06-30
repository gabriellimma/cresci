import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produto:Produto = new Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

 
    window.scroll(0,0)
    let id:number = this.route.snapshot.params['idProduto']
    this.findById(id)
  }

  
  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err =>{
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }
}
