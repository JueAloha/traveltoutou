package com.simplon.back.services;

import com.simplon.back.entities.Trip;

import java.util.List;
import java.util.Optional;

public interface TripService {

    void createTrip(Trip trip);

    List<Trip> getAllTrips();

    void deleteTrip(Long id);

    Trip updateTrip(Trip trip, Long id);

    Optional<Trip> getTripById(Long id);

    void deleteAll();

}
