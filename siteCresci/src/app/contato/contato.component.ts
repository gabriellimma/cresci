import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  Contato: Contato = new Contato;

  constructor(private ContatoService : ContatoService) { }

  ngOnInit(): any{
    window.scroll(0,0),
    
    (function() {
      "use strict";
      window.addEventListener(
        "load",
        function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("needs-validation");
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener(
              "submit",
              function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();
  }

  contatar() {
    this.ContatoService.postDoacao(this.Contato).subscribe((resp: Contato) => {
      this.Contato = resp
      console.log(`Produto cadastrado com sucesso!`)
      location.assign('/lojinha')
      
    }, err =>{alert(`Ops! parece que você preencheu algo errado!`), console.log(err)})
  }
}
