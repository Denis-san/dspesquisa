package com.dev.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.pesquisa.ententies.Game;

public interface GameRepository extends JpaRepository<Game, Long>{
	
}
