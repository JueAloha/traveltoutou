package com.simplon.back.dtos;

import javax.validation.constraints.NotNull;

public class UserUpdateDto {

    @NotNull
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
