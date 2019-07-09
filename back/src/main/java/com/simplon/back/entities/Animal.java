package com.simplon.back.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Data
@Entity
public class Animal {

    //TODO Enum species
    @Column(length = 100, nullable = false)
    private String species;
    @Column(length = 100, nullable = false)
    private Double size;
    @Column(length = 100, nullable = false)
    private Double weight;
    @Column(length = 100, nullable = false)
    private String name;
    @Column(length = 100, nullable = false)
    private int age;
    @Column(length = 100, nullable = false)
    private String description;
    @Column(length = 100, nullable = false)
    private Long microchip;

    public Animal() {

    }
}
