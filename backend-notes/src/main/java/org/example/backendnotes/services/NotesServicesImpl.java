package org.example.backendnotes.services;

import org.example.backendnotes.entity.NotesModels;
import org.example.backendnotes.repository.RepositoryNotes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.ByteBuffer;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class NotesServicesImpl implements NotesServices{

    @Autowired
    RepositoryNotes repository;

    @Override
    @Transactional
    public NotesModels save(NotesModels notes) {
        UUID idUnico = UUID.randomUUID(); //
        notes.setId(idUnico);
        return repository.save(notes);
    }

    @Override
    public List<NotesModels> encontrarTodos() {
        return (List<NotesModels>) repository.findAll();
    }

    @Override
    @Transactional
    public Optional<NotesModels> findById(UUID id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public void eliminar(UUID id) {
        repository.deleteById(id);
    }


}
