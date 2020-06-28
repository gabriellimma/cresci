import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  
  // textoDaPill = ''
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
    // this.plural()
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
    }, err => { console.log(err)})
  }

  filtrarPorCategoria (filtro, atributo) {
    this.listaProdutos = (this.filtroDeCor !== '' ? this.listaProdutos : this.listaProdutoVazia).filter(function (produto: Produto) {
      return produto[atributo].toLocaleLowerCase() === filtro
    })
  }

  filtrarPorTamanho (filtro, tamanho) {
    this.listaProdutos = (this.filtroDeCor !== '' ? this.listaProdutos : this.listaProdutoVazia).filter(function (produto: Produto) {
      return produto[tamanho].toLocaleLowerCase() === filtro
    })
  }

  // plural(){
    
  //   if(this.listaProdutos.length == 1){
  //     return this.textoDaPill =  "produto"
  //   } else {
  //   return this.textoDaPill = "produtos"    
  //   }
  // }

  resetarFiltro () {
    this.filtroAtual = ""
    this.listaProdutos = this.listaProdutoVazia;
  }

  }
