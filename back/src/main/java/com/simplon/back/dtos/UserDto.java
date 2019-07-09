package com.simplon.back.dtos;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserDto {

    @NotBlank
    @Size(min = 2, max = 20)
    private String firstname;
    @NotBlank
    @Size(min= 2, max = 20)
    private String lastname;

    public UserDto() {

    }

}
