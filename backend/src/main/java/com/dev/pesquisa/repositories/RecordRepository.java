package com.dev.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.pesquisa.ententies.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{
	
}
