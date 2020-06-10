package br.com.cresci.Cresci.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "endereco")
public class EnderecoCliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 1, max = 100)
	private String rua;	
	
	@NotNull
	@Size(min = 1, max = 9)
	private String numero;
	
	@NotNull
	@Size(min = 1, max = 50)
	private String bairro;
	
	@NotNull
	@Size(min = 8, max = 8)
	private String cep;
	

	@Size(min = 0, max = 300)
	private String complemento;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getRua() {
		return rua;
	}


	public void setRua(String rua) {
		this.rua = rua;
	}


	public String getNumero() {
		return numero;
	}


	public void setNumero(String numero) {
		this.numero = numero;
	}


	public String getBairro() {
		return bairro;
	}


	public void setBairro(String bairro) {
		this.bairro = bairro;
	}


	public String getCep() {
		return cep;
	}


	public void setCep(String cep) {
		this.cep = cep;
	}


	public String getComplemento() {
		return complemento;
	}


	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}	
	
	
}
