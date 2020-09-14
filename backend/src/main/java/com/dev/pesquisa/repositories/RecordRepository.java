package com.dev.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.pesquisa.ententies.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{
	
}
