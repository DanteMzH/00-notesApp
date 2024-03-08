package org.example.backendnotes.repository;

import org.example.backendnotes.entity.NotesModels;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface RepositoryNotes extends CrudRepository<NotesModels, UUID> {

}
