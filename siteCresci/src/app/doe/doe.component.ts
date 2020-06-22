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

  constructor(private doacaoService : DoacaoService) { }

  ngOnInit(): void{
    window.scroll(0,0);
  }

  doar(){
    this.doacaoService.postDoacao(this.doacao).subscribe((resp: Doacao)=>{
      this.doacao = resp
      location.assign('/doacao')
    })
  }

}
