package br.com.cresci.crescibr.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDTO {

	private long id;
	private String titulo;
	private String descricao;
	private String tamanho;
	private long quantidade;
	private double preco;
	private String foto1;
	private String foto2;
	private String foto3;
	private String foto4;
}
