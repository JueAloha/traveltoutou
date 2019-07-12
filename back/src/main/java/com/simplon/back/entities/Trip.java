package com.simplon.back.entities;

import lombok.Data;
import org.apache.tomcat.jni.Local;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.Instant;
import java.time.LocalDate;

@Data
@Entity
public class Trip {

    //TODO Add hours
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @Column(length = 100, nullable = false)
    private LocalDate date;
    @Column(length = 100, nullable = false)
    private LocalDate startLocation;
    @Column(length = 100, nullable = false)
    private LocalDate finalLocation;
    @Column(length = 100, nullable = false)
    private Double price;
    @Column(length = 100, nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeAnimal animalType;
    @Column(length = 100, nullable = false)
    @Enumerated(EnumType.STRING)
    private Transport transport;
    @Column(length = 100, nullable = false)
    private String description;

    public Trip() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getStartLocation() {
        return startLocation;
    }

    public void setStartLocation(LocalDate startLocation) {
        this.startLocation = startLocation;
    }

    public LocalDate getFinalLocation() {
        return finalLocation;
    }

    public void setFinalLocation(LocalDate finalLocation) {
        this.finalLocation = finalLocation;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public TypeAnimal getAnimalType() {
        return animalType;
    }

    public void setAnimalType(TypeAnimal animalType) {
        this.animalType = animalType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transport) {
        this.transport = transport;
    }
}
