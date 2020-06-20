package br.com.cresci.crescibr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@Table(name = "Enderecos")
public class EnderecoModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "cep", nullable = false)
	@Size(min = 8, max = 8)
	private String cep;

	@Column(name = "cidade", nullable = false)
	private String cidade;

	@Column(name = "estado", nullable = false)
	private String estado;

	@Column(name = "rua", nullable = false)
	private String rua;

	@Column(name = "bairro", nullable = false)
	private String bairro;

	@Column(name = "numero", nullable = false)
	private String numero;

	@Column(name = "complemento", nullable = true)
	private String complemento;
}
