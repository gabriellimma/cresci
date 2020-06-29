import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaqComponent } from './faq/faq.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { DoeComponent } from './doe/doe.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { EntrarComponent } from './entrar/entrar.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MeusprodutosComponent } from './meusprodutos/meusprodutos.component';
import { DeletarMeusprodutosComponent } from './deletar-meusprodutos/deletar-meusprodutos.component';
import { EditarMeusprodutosComponent } from './editar-meusprodutos/editar-meusprodutos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FaqComponent,
    ProdutosComponent,
    ContatoComponent,
    DoeComponent,
    SobreComponent,
    UsuariosComponent,
    CadastroComponent,
    EntrarComponent,
    PrivacidadeComponent,
    EditarUsuarioComponent,
    DeletarUsuarioComponent,

    PaginaProdutoComponent,
    CadastroProdutoComponent,

    TermosDeUsoComponent,
    NotfoundComponent,
    MeusprodutosComponent,
    DeletarMeusprodutosComponent,
    EditarMeusprodutosComponent,
    PerfilComponent,
    CarrinhoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
