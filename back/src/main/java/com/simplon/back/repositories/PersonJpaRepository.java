package com.simplon.back.repositories;

import com.simplon.back.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonJpaRepository extends JpaRepository<Person, Long> {

    Person findByUserAccountMail(String mail);

}
