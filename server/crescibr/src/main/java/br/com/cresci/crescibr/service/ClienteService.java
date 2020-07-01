package br.com.cresci.crescibr.service;

import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.cresci.crescibr.model.ClienteLoginModel;
import br.com.cresci.crescibr.model.ClienteModel;
import br.com.cresci.crescibr.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
	
	public ClienteModel CadastrarCliente(ClienteModel usuario) {
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);
		return repository.save(usuario);
	}
	
	public Optional<ClienteLoginModel> Logar(ClienteLoginModel clienteLogin){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		// Busca no BD por usuário com email igual ao informado no login
				Optional<ClienteModel> usuario = repository.findByUsuario(clienteLogin.getUsuario());
				
				if(usuario.isPresent()==false)
					return Optional.empty();
				// Se encontra correspondência de email, mas as senhas não correspondem, retorna o Optional vazio
				if(encoder.matches(clienteLogin.getSenha(), usuario.get().getSenha())==false)
					return Optional.empty();	
				
				String auth = clienteLogin.getUsuario()+":"+clienteLogin.getSenha();
				String encoding = Base64.getEncoder().encodeToString((auth).getBytes());
				String authHeader = "Basic "+encoding;
				
				ClienteLoginModel usuarioLogado = new ClienteLoginModel();
				
				usuarioLogado.setIdCliente(usuario.get().getIdCliente());
				usuarioLogado.setCpf(usuario.get().getCpf());
				usuarioLogado.setNomeCliente(usuario.get().getNomeCliente());
				usuarioLogado.setFoto(usuario.get().getFoto());
				usuarioLogado.setSenha(usuario.get().getSenha());
				usuarioLogado.setUsuario(usuario.get().getUsuario());
				usuarioLogado.setToken(authHeader);
				
				return Optional.ofNullable(usuarioLogado);
		}	
}
