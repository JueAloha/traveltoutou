package com.simplon.back.dtos;

import lombok.Data;

import javax.validation.Valid;

@Data
public class UserCreateDto extends UserDto {

    @Valid
    private UserAccountDto accountDto;
    public UserCreateDto() {

    }


}
