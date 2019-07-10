package com.simplon.back.dtos;

public class UserViewDto {

    private String firstname;
    private String lastname;

    public UserViewDto() {
        super();
    }

    public UserViewDto(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
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
