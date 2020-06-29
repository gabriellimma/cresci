import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }

}
