import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos-de-uso',
  templateUrl: './termos-de-uso.component.html',
  styleUrls: ['./termos-de-uso.component.css']
})
export class TermosDeUsoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)    
  }

}
