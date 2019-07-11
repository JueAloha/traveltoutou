package com.simplon.back.controllers;

import com.simplon.back.dtos.UserCreateDto;
import com.simplon.back.services.UserService;
import org.springframework.http.HttpStatus;
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

    @GetMapping
    protected void getAll() {
    service.getAllUsers();
    }
    @PutMapping("/{id}")
    protected void update(@PathVariable(value = "id") Long id, @Valid @RequestBody UserCreateDto user) {
        service.update(user, id);
    }

    @DeleteMapping("{id}")
    //@Secured("ROLE_ADMIN")
    protected void delete(@PathVariable(value = "id") Long id) {
        service.delete(id);
    }
}
