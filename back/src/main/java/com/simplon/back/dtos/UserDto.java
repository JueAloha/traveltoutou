package com.simplon.back.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class UserDto {

    @NotBlank
    @Size(min = 2, max = 20)
    private String firstname;
    @NotBlank
    @Size(min= 2, max = 20)
    private String lastname;

    public UserDto() {

    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
