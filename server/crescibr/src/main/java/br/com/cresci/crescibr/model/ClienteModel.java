package br.com.cresci.crescibr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.br.CPF;

import lombok.Data;

@Data
@Entity
@Table(name = "clientes")
public class ClienteModel {

	//criado esse constructor por erro  que estava no compraController
	public ClienteModel() {

	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cliente")
	private long idCliente;

	@Column(name = "nomeCliente", nullable = false)
	//@NotEmpty
	@Size(min = 5, max = 32)
	private String nomeCliente;

	@Column(name = "cpf", nullable = false, unique = true, length = 11)
	@CPF
	private String cpf;
	
	@Email
	@Column(nullable = false, unique = true)
	@Size(min = 8, max = 50)
	private String usuario;

	@Column(name = "senha", nullable = false)
	@NotEmpty
	//@Size(min = 6, max = 30)
	private String senha;
	
	@Column(name = "numeroTelefone", nullable = true, unique = true, length = 11)
	private String numeroTelefone;
	
	@Column(name = "foto", nullable = true)
	private String foto = "https://i.imgur.com/yRGY7mz.png";	
	
	@Column(name = "cep", nullable = true)
	@Size(min = 8, max = 8)
	private String cep;

	@Column(name = "cidade", nullable = true)
	private String cidade;

	@Column(name = "estado", nullable = true)
	private String estado;

	@Column(name = "rua", nullable = true)
	private String rua;

	@Column(name = "bairro", nullable = true)
	private String bairro;

	@Column(name = "numero", nullable = true)
	private String numeroCasa;

	@Column(name = "complemento", nullable = true)
	private String complemento;

}
