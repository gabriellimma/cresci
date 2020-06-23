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

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  cadastrar() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      location.assign('/lojinha')
    })
  }
}
