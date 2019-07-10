package com.simplon.back.dtos;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserAccountDto {

    @NotBlank
    @Size(max=100)
    private String userName;
    @NotBlank
    // Size fait reference à l'input direct et non au slot de la BD (voir length dans Person)
    @Size(max=100)
    private String password;

    public String getUserName() {
        return userName;
    }

    public void setUsername(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
