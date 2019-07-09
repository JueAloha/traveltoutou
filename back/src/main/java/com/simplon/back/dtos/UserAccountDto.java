package com.simplon.back.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserAccountDto {

    @NotBlank
    private String mail;
    @NotBlank
    // Size fait reference à l'input direct et non au slot de la BD (voir length dans Person)
    @Size(max=12)
    private String password;

}
