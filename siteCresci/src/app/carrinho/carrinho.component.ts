import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  idCliente: string = localStorage.getItem('idCliente')
  idClienteNumber = parseInt(this.idCliente);
  usuario: Usuario = new Usuario;
  produto:Produto = new Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)
    this.findUsuarioById(this.idClienteNumber)
   
    let token = localStorage.getItem('token');

    if(token == null){
      alert('Faça o login para ter acesso ao carrinho, por favor!');
      this.router.navigate(['entrar']);
    }

    window.scroll(0,0);
  }
  findUsuarioById(idClienteNumber:number) {
    this.usuarioService.getByIdUsuario(idClienteNumber).subscribe((resp: Usuario) => {
      this.usuario = resp;

    })
  }

  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err =>{
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }
}



