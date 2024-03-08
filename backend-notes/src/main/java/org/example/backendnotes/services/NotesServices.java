package org.example.backendnotes.services;

import org.example.backendnotes.entity.NotesModels;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface NotesServices {

    NotesModels save(NotesModels notes);


    List<NotesModels> encontrarTodos();

    Optional<NotesModels> findById(UUID id);


    @Transactional
    void eliminar(UUID id);
}
