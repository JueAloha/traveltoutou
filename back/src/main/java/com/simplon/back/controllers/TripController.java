package com.simplon.back.controllers;

import com.simplon.back.entities.Trip;
import com.simplon.back.services.TripService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/trips")
public class TripController {


    private final TripService service;

    public TripController(TripService service) {
        this.service = service;
    }

    @GetMapping("/all")
    protected void getAllTrips() {
        service.getAllTrips();
    }

    @GetMapping("/trip/{id}")
    protected void getTripById(@PathVariable(value = "id") Long id) {
        service.getTripById(id);
    }

    @PostMapping("/addTrip")
    protected void createTrip(@Valid @RequestBody Trip trip) {
        service.createTrip(trip);
    }


    @PutMapping("/update/{id}")
    protected void updateTrip(@PathVariable(value = "id") Long id, @RequestBody @Valid Trip trip) {
        service.updateTrip(trip, id);
    }

    @DeleteMapping("/delete/{id}")
    protected void deleteTrip(@PathVariable(value = "id") Long id) {
        service.deleteTrip(id);
    }

    @DeleteMapping("/delete/all")
    protected void deleteAllTrips() {
        service.deleteAll();
    }
}
