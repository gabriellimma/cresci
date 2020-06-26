import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NewsletterService }  from '../service/newsletter.service';
import { Newsletter } from '../model/Newsletter';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;  
  newsletter: Newsletter = new Newsletter;
  valido: boolean = true;

  constructor(private NewsletterService : NewsletterService) {}

  ngOnInit(): void {
    window.scroll(0,0)
  }

  cadastrarEmail(){
    this.NewsletterService.postEmail(this.newsletter).subscribe((resp: Newsletter)=>{
      this.newsletter = resp
      this.valido = true
      alert("Email cadastrado com sucesso!")
      location.assign('/home')
    }, err =>{this.valido = false, console.log(err), alert("Opa, parece que seu e-mail não é válido :(")})
  }

}
