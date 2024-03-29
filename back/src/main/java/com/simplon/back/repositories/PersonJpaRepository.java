package com.simplon.back.repositories;

import com.simplon.back.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonJpaRepository extends JpaRepository<Person, Long> {

}
