package br.com.cresci.crescibr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import lombok.Data;

@Data
@Entity
@Table(name = "newsletter")
public class NewsletterModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "email", nullable = false, unique = true)
	@Email
	private String email;
}
