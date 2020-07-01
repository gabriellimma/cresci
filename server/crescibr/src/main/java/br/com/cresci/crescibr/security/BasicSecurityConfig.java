package br.com.cresci.crescibr.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		//requisiçõesa não autenticadas
		.antMatchers("/usuarios/cadastrar").permitAll()
		.antMatchers("/usuarios/login").permitAll()
		.antMatchers(HttpMethod.GET, "/produtos").permitAll()		
		.antMatchers(HttpMethod.GET, "/produtos/{id}").permitAll()
		.antMatchers(HttpMethod.GET, "/produtos/categoria/{categoria}").permitAll()
		.antMatchers(HttpMethod.GET, "/produtos/nome/{titulo}").permitAll()
		.antMatchers(HttpMethod.GET, "/produtos/tamanho/{tamanho}").permitAll()
		.antMatchers(HttpMethod.GET, "/produtos/preco/{preco}").permitAll()			
		.antMatchers(HttpMethod.POST, "/doacao").permitAll()
		.antMatchers(HttpMethod.GET, "/doacao").permitAll()
		.antMatchers(HttpMethod.POST, "/newsletter").permitAll()
		.antMatchers(HttpMethod.POST, "/contato").permitAll()
		.antMatchers(HttpMethod.POST, "/contato").permitAll()
		//requisições que necessitam autenticação
		//.antMatchers(HttpMethod.GET, "/usuarios/{idCliente}").authenticated()
		.antMatchers(HttpMethod.PUT,"/usuarios/editar").authenticated()
		.antMatchers(HttpMethod.DELETE, "/produtos/{id}").authenticated()
		.antMatchers(HttpMethod.POST, "/produtos/editar").authenticated()
		.antMatchers(HttpMethod.POST, "/produtos/cadastrar").authenticated()
		.antMatchers(HttpMethod.POST, "/comprar").authenticated()		
		.anyRequest().authenticated()
		.and().httpBasic()
		.and().sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().cors()
		.and().csrf().disable();
		
	}	
}
