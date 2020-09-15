package com.dev.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.pesquisa.ententies.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{
	
}
