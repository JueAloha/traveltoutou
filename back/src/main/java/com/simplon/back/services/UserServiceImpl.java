package com.simplon.back.services;

import com.simplon.back.entities.Person;
import com.simplon.back.exception.ResourceNotFoundException;
import com.simplon.back.repositories.PersonJpaRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Data
@Service
public class UserServiceImpl implements UserService {

    private final PersonJpaRepository repo;

    public UserServiceImpl(PersonJpaRepository repo) {
        this.repo = repo;

    }


    @Override

    public void create(Person user) {
        Person userCreated = new Person();
        userCreated.setLastName(user.getLastName());
        userCreated.setFirstName(user.getFirstName());
        userCreated.setUsername(user.getUsername());
        userCreated.setPassword(user.getPassword());
        repo.save(userCreated);
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
