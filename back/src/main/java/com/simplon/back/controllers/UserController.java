package com.simplon.back.controllers;

import com.simplon.back.dtos.UserCreateDto;
import com.simplon.back.dtos.UserUpdateDto;
import com.simplon.back.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    @ResponseStatus(value = HttpStatus.CREATED)
    protected void create(@Valid @RequestBody UserCreateDto user) {
        service.create(user);
    }

    @PutMapping("/{id}")
    protected void update(@PathVariable(value = "id") Long id, @Valid @RequestBody UserUpdateDto user) {

    }

    @DeleteMapping("{id}")
    @Secured("ROLE_ADMIN")
    protected void delete(@PathVariable(value = "id") Long id) {
        service.delete(id);
    }
}
