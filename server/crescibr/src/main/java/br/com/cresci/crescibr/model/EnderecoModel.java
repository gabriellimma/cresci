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
	private String cep = "00000000";

	@Column(name = "cidade", nullable = false)
	private String cidade = "cidade";

	@Column(name = "estado", nullable = false)
	private String estado = "estado";

	@Column(name = "rua", nullable = false)
	private String rua = "rua";

	@Column(name = "bairro", nullable = false)
	private String bairro = "bairro";

	@Column(name = "numero", nullable = false)
	private String numero = "numero";

	@Column(name = "complemento", nullable = true)
	private String complemento = "complemento";
}
