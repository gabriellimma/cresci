import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
    $('button').click(function(){
      $('button').toggleClass('active');
      $('.title').toggleClass('active');
      $('nav').toggleClass('active');
    });
  }

}
