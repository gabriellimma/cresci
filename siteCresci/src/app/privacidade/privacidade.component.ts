import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.component.html',
  styleUrls: ['./privacidade.component.css']
})
export class PrivacidadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
