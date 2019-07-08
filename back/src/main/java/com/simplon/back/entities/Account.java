package com.simplon.back.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@Data
public class Account {

    @Column(length = 100, nullable = false)
    private String mail;
    @Column(length = 100, nullable = false)
    private String password;

    public Account() {

    }

}
