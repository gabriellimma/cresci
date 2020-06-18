package br.com.cresci.crescibr.model;

import lombok.Data;

@Data
public class ClienteLoginModel {
	

	private String email;
	
	private String senha;
	
	private String token;
	
}
