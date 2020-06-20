import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  produto:Produto = new Produto
  // postagem:Postagem = new Postagem
  constructor( private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }
  // private postagemService: PostagemService, private route: ActivatedRoute, private router: Router

  ngOnInit(): void {
    let id:number  = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    });
  }

  // findallProdutos(){
  //   this.UsuarioService.getAllUsuarios().subscribe((resp: Produto[])=>{
  //     this.listaProdutos = resp
  //   })
  // }
}