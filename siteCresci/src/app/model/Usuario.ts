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

	public idProduto:number;


	public  titulo: string;


	public  descricao: string;


	public  tamanho: string;


	public quantidade: number;


	public preco: number;


	public  foto1: string;


	public  foto2: string;


	public  foto3: string;


	public  foto4: string;

}
