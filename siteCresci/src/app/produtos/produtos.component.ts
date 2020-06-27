import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  filtroDeCor: string = ''
  listaProdutoVazia: Produto[]
  filtroAtual: string = ''
  filtroTipoAtual: string = ''
  filtroTamanhoAtual: string= ''
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
      this.listaProdutos = resp
      this.listaProdutoVazia = resp
    })
  }

  findById(id: number){
    this.ProdutoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    }, err => {})
  }

  filtrarPor (filtro, tipo) {
    this.filtroAtual = filtro;
    this.filtroTipoAtual = tipo;
    this.listaProdutos = (this.filtroDeCor !== '' ? this.listaProdutos : this.listaProdutoVazia).filter(function (produto: Produto) {
      console.log('filtrando')
      return produto[tipo].toLocaleLowerCase() === filtro
    })
  }

  resetarFiltro () {
    this.filtroAtual = ""
    this.listaProdutos = this.listaProdutoVazia;

  }

  }
