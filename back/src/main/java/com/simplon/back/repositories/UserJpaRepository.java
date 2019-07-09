package com.simplon.back.repositories;

import com.simplon.back.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaRepository extends JpaRepository<User, Long> {

    User findByUserAccountMail( String mail);
}
