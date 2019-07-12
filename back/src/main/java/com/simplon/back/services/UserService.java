package com.simplon.back.services;

import com.simplon.back.entities.Person;

import java.util.List;

public interface UserService {

    void create(Person user);

    void delete(Long id);


    Person update(Person user, Long id);

    List getAllUsers();

    void deleteAll();

}
