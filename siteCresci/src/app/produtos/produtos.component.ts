import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

 listaProdutos: Produto[]

 produto: Produto = new Produto;

  constructor(private UsuarioService : UsuarioService) { }
  //construir um produto.service.ts ou usar o mesmo que o do usuário?

  ngOnInit(): void {

    this.findallProdutos()
        window.scroll(0,0)

  }

  findallProdutos(){
    this.UsuarioService.getAllUsuarios().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }
  

  }
