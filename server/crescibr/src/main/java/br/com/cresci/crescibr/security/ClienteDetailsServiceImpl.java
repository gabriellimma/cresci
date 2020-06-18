package br.com.cresci.crescibr.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.cresci.crescibr.model.ClienteModel;
import br.com.cresci.crescibr.repository.ClienteRepository;

@Service
public class ClienteDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private ClienteRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		Optional<ClienteModel> user = userRepository.findByUsuario(userName);
		user.orElseThrow(() -> new UsernameNotFoundException(userName + " não encontrado."));

		return user.map(ClienteDetailsImpl::new).get();
	}
}
