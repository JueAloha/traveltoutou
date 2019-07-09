package com.simplon.back.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @Column(length = 100, nullable = false)
    private String firstname;
    @Column(length = 100, nullable = false)
    private String lastname;
    @Embedded
    private UserAccount account;

    public User() {

    }
}
