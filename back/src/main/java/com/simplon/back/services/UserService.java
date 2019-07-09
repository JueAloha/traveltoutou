package com.simplon.back.services;

import com.simplon.back.dtos.UserCreateDto;

public interface UserService {

    void create(UserCreateDto user);

    void delete(Long id);

}
