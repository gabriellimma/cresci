import { EnderecoModel } from './EnderecoModel';

export class Usuario {

	public idCliente:number;
	public nomeCliente:string;
	public cpf:string ;
	public usuario:string ;
	public  senha:string ;
	public endereco:EnderecoModel ;
}


//ENVIA E RECEBE ATRIBUTOS PARA A API

export class Produto {

    public id:number
    public titulo:string
    public preco:number
    public descricao:string
    public imagem:string
    public imagem2:string
    public imagem3:string
    public imagem4:string
   // public qtdEstoque:number
   //public tamanho:number
   //public estado: string

}
