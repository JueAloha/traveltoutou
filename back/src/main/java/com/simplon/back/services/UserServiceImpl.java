package com.simplon.back.services;

import com.simplon.back.entities.Person;

import com.simplon.back.exception.ResourceNotFoundException;
import com.simplon.back.repositories.PersonJpaRepository;
import lombok.Data;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public void create(Person dto) {
        Person user = new Person();
        user.setLastName(dto.getLastName());
        user.setFirstName(dto.getFirstName());
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        repo.save(user);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }


    public Person update(Person user, Long id) {
        Person userToUpdate = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "id", user));
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setUsername(user.getUsername());
        userToUpdate.setPassword(user.getPassword());
        Person updatedUser = repo.save(userToUpdate);
        return updatedUser;
    }

    @Override
    public List getAllUsers() {
        return this.repo.findAll();
    }
    @Override
    public void deleteAll() {
        repo.deleteAll();
    }

}
