package com.simplon.back.services;

import com.simplon.back.entities.Trip;
import com.simplon.back.exception.ResourceNotFoundException;
import com.simplon.back.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TripServiceImpl implements TripService {


    private final TripRepository repo;

    @Autowired
    public TripServiceImpl(TripRepository repo) {
        this.repo = repo;
    }


    @Override
    public void createTrip(Trip trip) {
        Trip tripCreated = new Trip();
        tripCreated.setDate(trip.getDate());
        tripCreated.setStartLocation(trip.getStartLocation());
        tripCreated.setFinalLocation(trip.getFinalLocation());
        tripCreated.setPrice(trip.getPrice());
        tripCreated.setAnimalType(trip.getAnimalType());
        tripCreated.setTransport(trip.getTransport());
        tripCreated.setDescription(trip.getDescription());
        repo.save(tripCreated);


    }

    @Override
    public List<Trip> getAllTrips() {
        return repo.findAll();
    }

    @Override
    public void deleteTrip(Long id) {
        repo.deleteById(id);
    }

    @Override
    public Trip updateTrip(Trip trip, Long id) {

        Trip tripToUpdate = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Trip", "id", trip));
        tripToUpdate.setDate(trip.getDate());
        tripToUpdate.setStartLocation(trip.getStartLocation());
        tripToUpdate.setFinalLocation(trip.getFinalLocation());
        tripToUpdate.setPrice(trip.getPrice());
        tripToUpdate.setAnimalType(trip.getAnimalType());
        tripToUpdate.setTransport(trip.getTransport());
        tripToUpdate.setDescription(trip.getDescription());
        Trip updatedTrip = repo.save(tripToUpdate);
        return updatedTrip;

    }

    @Override
    public Optional<Trip> getTripById(Long id) {
       return repo.findById(id);
    }

    @Override
    public void deleteAll() {
        repo.deleteAll();
    }
}
