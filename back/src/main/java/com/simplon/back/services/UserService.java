package com.simplon.back.services;

import com.simplon.back.dtos.UserCreateDto;
import com.simplon.back.entities.Person;

import java.util.List;

public interface UserService {

    void create(UserCreateDto user);

    void delete(Long id);

    Person update(UserCreateDto user, Long id);

    List getAllUsers();

}
