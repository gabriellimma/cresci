import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  // listaProdutos: Produto []
  produto: Produto = new Produto
  valido: boolean = true;


  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  cadastrar() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      console.log(`Produto cadastrado com sucesso!`)
      location.assign('/lojinha')
      
    }, err =>{this.valido = false, alert(`Ops! parece que você preencheu algo errado!`), console.log(err)})
  }
}
