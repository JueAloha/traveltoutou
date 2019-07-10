package com.simplon.back.dtos;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class UserAccountDto {

    @NotBlank
    @Size(min = 10, max = 50)
    private String mail;
    @NotBlank
    // Size fait reference à l'input direct et non au slot de la BD (voir length dans Person)
    @Size(min = 8, max = 50)
    private String password;

    public UserAccountDto() {
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
