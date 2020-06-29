import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  listaContatos: Contato[]
  Contato: Contato = new Contato;

  constructor(private ContatoService : ContatoService) { }

  ngOnInit(): any{
    window.scroll(0,0)
    
    
  }
  contatar() {
    this.ContatoService.postDoacao(this.Contato).subscribe((resp: Contato) => {
      this.Contato = resp
      location.assign('/contato')      
    })
  }
}
