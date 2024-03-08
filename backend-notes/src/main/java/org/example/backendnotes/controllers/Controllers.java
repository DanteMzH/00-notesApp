package org.example.backendnotes.controllers;

import org.example.backendnotes.entity.NotesModels;
import org.example.backendnotes.services.NotesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/notes")
@CrossOrigin(originPatterns = "*")
public class Controllers {

    @Autowired
    NotesServices service;

    @PostMapping
    public ResponseEntity<?> create (@RequestBody NotesModels notes){
        NotesModels newNote = service.save(notes);

        return ResponseEntity.status(HttpStatus.CREATED).body(newNote);
    }

    @GetMapping
    public List<NotesModels> listaNotes(){
        return service.encontrarTodos();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteId(@PathVariable UUID id){
        Optional<NotesModels> o = service.findById((id));

        if (o.isPresent()) {
            try {
                service.eliminar(id);
                return ResponseEntity.noContent().build();
            } catch (Exception e) {
                e.printStackTrace(); // Imprimir el error en la consola para depurar
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar la nota");
            }
        }
        return ResponseEntity.notFound().build();
    }
}
