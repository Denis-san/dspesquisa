package com.dev.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.pesquisa.ententies.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{
	
}
