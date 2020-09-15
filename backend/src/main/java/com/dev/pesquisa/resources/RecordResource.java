package com.dev.pesquisa.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.pesquisa.dto.RecordDTO;
import com.dev.pesquisa.dto.RecordInsertDTO;
import com.dev.pesquisa.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordResource {
	
	@Autowired
	private RecordService service;
	
	@PostMapping
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto){
		RecordDTO newDTO = service.insert(dto);
		return ResponseEntity.ok(newDTO);
	}
}
