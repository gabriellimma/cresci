
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-meusprodutos',
  templateUrl: './deletar-meusprodutos.component.html',
  styleUrls: ['./deletar-meusprodutos.component.css']
})
export class DeletarMeusprodutosComponent implements OnInit {

  produto:Produto = new Produto;
  // delOk:boolean = false;

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

  btnSim(){
    this.produtoService.deleteProduto(this.produto.idProduto).subscribe(()=>{
      alert("Produto deletado com sucesso.");
      // this.delOk = true
      this.router.navigate(['/meusprodutos'])
      // localStorage.setItem("delOk", this.delOk.toString())
    })

  }

  btnNao(){
    this.router.navigate(['/meusprodutos'])
  }


}