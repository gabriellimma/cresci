package br.com.cresci.crescibr.dto;

import br.com.cresci.crescibr.model.EnderecoModel;
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
	private EnderecoModel endereco;
}
