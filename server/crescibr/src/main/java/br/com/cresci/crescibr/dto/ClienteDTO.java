package br.com.cresci.crescibr.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDTO {

	private long id;
	private String nomeCliente;
	private String cpf;
	private String email;
	private String senha;
}
