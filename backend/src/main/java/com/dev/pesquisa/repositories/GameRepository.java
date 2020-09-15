package com.dev.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.pesquisa.ententies.Game;


@Repository
public interface GameRepository extends JpaRepository<Game, Long>{
	
}
