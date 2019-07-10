package com.simplon.back.services;

import com.simplon.back.dtos.UserCreateDto;
import com.simplon.back.entities.Person;
import com.simplon.back.entities.UserAccount;
import com.simplon.back.repositories.PersonJpaRepository;
import lombok.Data;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Data
@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder encoder;

    private final PersonJpaRepository repo;

    public UserServiceImpl(PasswordEncoder encoder, PersonJpaRepository repo) {
        this.encoder = encoder;
        this.repo = repo;

    }


    @Override
    public void create(UserCreateDto dto) {
        Person user = new Person();
        user.setFirstname(dto.getFirstname());
        user.setLastname(dto.getLastname());
        UserAccount account = new UserAccount();
        account.setUsername(dto.getUserAccount().getUsername());
        account.setPassword(dto.getUserAccount().getPassword());
        user.setUserAccount(account);
        repo.save(user);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
}
