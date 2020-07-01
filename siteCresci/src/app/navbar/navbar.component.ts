import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  foto: string = localStorage.getItem('foto')
  nomeCliente: string = localStorage.getItem('nomeCliente')
  token: string = localStorage.getItem('token');
  constructor(private router: Router, public autenticacao: AutenticacaoService) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  pegarPrimeiroNome(nomeCliente){
    let primeiroNome = nomeCliente.split(' ');
    return primeiroNome.slice(0,1)
  }
  
  sair(){
    this.router.navigate(['home'])
    localStorage.clear();
  }

}
