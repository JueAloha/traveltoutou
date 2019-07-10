package com.simplon.back.services;

import com.simplon.back.entities.Person;
import com.simplon.back.entities.Role;
import com.simplon.back.entities.UserAccount;
import com.simplon.back.repositories.PersonJpaRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public class UserDetailsServiceImpl implements UserDetailsService {
    private final PersonJpaRepository repo;

    protected UserDetailsServiceImpl(PersonJpaRepository repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { // Pré-implémentation du UserDetails
        Person person = repo.findByUserAccountUsername(username); // Appelle en BDD

        if (person == null) {
            throw new UsernameNotFoundException("with mail: " + username);
        }

        UserAccount account = person.getUserAccount();
        return buildUser(account);

    }

    // ---------------------------------------------------------------------------------------------------------- //
    // Ce code n'a pas sa place dans une couche service, il serait plus judicieux de l'avoir dans une classe à part

    private User buildUser(UserAccount account) {
        String mail = account.getUsername();
        String password = account.getPassword();
        boolean enabled = account.isEnabled();
        boolean accountNonExpired = account.isAccountNonExpired();
        boolean credentialsNonExpired = account.isCredentialsNonExpired();
        boolean accountNonLocked = account.isAccountNonLocked();
        Role role = account.getRole();
        Collection<? extends GrantedAuthority> authorities = buildAutorities(role);

        return new User(mail, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
    }

    private Collection<GrantedAuthority> buildAutorities(Role role) {
        Set<GrantedAuthority> authorities = new HashSet<>();
        GrantedAuthority authority = new SimpleGrantedAuthority(role.name()); // toString() peut être modifiée donc cela peut être dangereux, name est final elle retourne le type énuméré
        authorities.add(authority);
        return authorities;
    }
}
