package com.simplon.back.services;

import com.simplon.back.dtos.UserCreateDto;
import com.simplon.back.entities.User;
import com.simplon.back.entities.UserAccount;
import com.simplon.back.repositories.UserJpaRepository;
import lombok.Data;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Data
@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder encoder;

    private final UserJpaRepository repo;


    @Override
    public void create(UserCreateDto dto) {
        User user = new User();
        user.setFirstname(dto.getFirstname());
        user.setLastname(dto.getLastname());

        UserAccount userAccount = new UserAccount();
        userAccount.setMail(dto.getAccountDto().getMail());
        String decoded = dto.getAccountDto().getPassword();
        String encoded = encoder.encode(decoded);
        userAccount.setPassword(encoded);
        user.setAccount(userAccount);
        repo.save(user);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
}
