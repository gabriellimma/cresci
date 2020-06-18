package br.com.cresci.crescibr.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompraDTO {
	
	private long compra;
	
	private long  produto;
	
	private long  cliente;

}
