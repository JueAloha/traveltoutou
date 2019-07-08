package com.simplon.back.entities;

import lombok.Data;

import javax.persistence.Column;
import java.time.Instant;

@Data
public class Trip {

    @Column(length = 100, nullable = false)
    private Instant date;
    @Column(length = 100, nullable = false)
    private Instant startLocation;
    @Column(length = 100, nullable = false)
    private Instant finalLocation;
    @Column(length = 100, nullable = false)
    private Double price;
    @Column(length = 100, nullable = false)
    private String animalType;
    @Column(length = 100, nullable = false)
    private String transport;
    @Column(length = 100, nullable = false)
    private String description;

    public Trip() {

    }
}
