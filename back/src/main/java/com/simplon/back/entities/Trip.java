package com.simplon.back.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.Instant;

@Data
@Entity
public class Trip {

    //TODO Add hours
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @Column(length = 100, nullable = false)
    private Instant date;
    @Column(length = 100, nullable = false)
    private Instant startLocation;
    @Column(length = 100, nullable = false)
    private Instant finalLocation;
    @Column(length = 100, nullable = false)
    private Double price;
    @Column(length = 100, nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeAnimal animalType;
    @Column(length = 100, nullable = false)
    private String transport;
    @Column(length = 100, nullable = false)
    private String description;

    public Trip() {
    }
}
