package com.simplon.back.dtos;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserAccountDto {

    @NotBlank
    @Size(max=100)
    private String username;
    @NotBlank
    // Size fait reference à l'input direct et non au slot de la BD (voir length dans Person)
    @Size(max=100)
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
