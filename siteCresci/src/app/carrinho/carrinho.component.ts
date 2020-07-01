import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    if(token == null){
      alert('Faça o login para ter acesso ao carrinho, por favor!');
      this.router.navigate(['entrar']);
    }

    window.scroll(0,0);
  }

}
