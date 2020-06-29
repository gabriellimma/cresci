import { Component, OnInit } from '@angular/core';
import { Doacao } from '../model/Doacao';
import { DoacaoService } from '../service/doacao.service';

@Component({
  selector: 'app-doe',
  templateUrl: './doe.component.html',
  styleUrls: ['./doe.component.css']
})
export class DoeComponent implements OnInit {

  listaDoacoes: Doacao[]
  doacao: Doacao = new Doacao;
  valido: boolean = true;
  constructor(private doacaoService : DoacaoService) { }

  ngOnInit(): void{
    
    window.scroll(0,0);
  }

  doar(){
    this.doacaoService.postDoacao(this.doacao).subscribe((resp: Doacao)=>{
      this.doacao = resp
      this.valido = true
      alert("Doação feita com sucesso!")
      location.assign('/doacao')
    }, err =>{this.valido = false, console.log(err), alert("Opa, parece que ocorreu um erro no preenchimento :(")})
  }
  
}
