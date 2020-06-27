import { Component, OnInit } from '@angular/core';
        import { Produto } from '../model/Produto';
        import { ProdutoService } from '../service/produto.service';
        import { ActivatedRoute, Router } from '@angular/router';
        
        @Component({
          selector: 'app-editar-meusprodutos',
          templateUrl: './editar-meusprodutos.component.html',
          styleUrls: ['./editar-meusprodutos.component.css']
        })
        export class EditarMeusprodutosComponent implements OnInit {
        
          produto:Produto = new Produto;
          constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }
        
          ngOnInit(): void {
            let id = this.route.snapshot.params['idProduto']
            this.findById(id)
          }
        
          findById(id:number){
            this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
              this.produto = resp
            })
          }
        
          salvar(){
            this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
              this.produto = resp
              this.router.navigate(['/meusprodutos'])
              location.assign('/meusprodutos')
            })
          }
        
        
        }
        