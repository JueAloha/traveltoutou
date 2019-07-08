package com.simplon.back.entities;

import lombok.Data;

import javax.persistence.Column;

@Data
public class User {

    @Column(length = 100, nullable = false)
    private String firstname;
    @Column(length = 100, nullable = false)
    private String lastname;

    public User() {

    }
}
