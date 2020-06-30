package br.com.cresci.crescibr.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.lang.NonNull;

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
	@Size(min = 5, max = 100)
	private String nomeCliente;

	@Column(name = "cpf", nullable = false, unique = true, length = 11)
	//@CPF
	private String cpf;
	
	@Email
	@Column(nullable = false, unique = true)
	@Size(min = 8, max = 50)
	private String usuario;

	@Column(name = "senha", nullable = false)
	@NotEmpty
	//@Size(min = 6, max = 30)
	private String senha;

	@OneToOne(cascade = CascadeType.ALL)
	@NonNull
	private EnderecoModel endereco;
	
	@Column(name="foto_cliente")
	private String fotoCliente;
}
