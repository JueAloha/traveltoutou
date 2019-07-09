package com.simplon.back.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserAccountDto {

    @NotBlank
    @Size(min = 10)
    private String mail;
    @NotBlank
    // Size fait reference à l'input direct et non au slot de la BD (voir length dans Person)
    @Size(min = 8 , max = 50)
    private String password;

}
