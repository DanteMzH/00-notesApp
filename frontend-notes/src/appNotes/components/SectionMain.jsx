import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { instance } from '../../Api/GetApi';

export const SectionMain = () => {


  const[notes,setNotes] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      const response = await instance.get();
      setNotes(response.data);
    };
    getNotes();
  }, []);

  const handleDeleteNote = async (id) => {
    await instance.delete(`/${id}`);
    setNotes(notes.filter((nota) => nota.id !== id));
  };

  return (
    <div>
      {notes.map((nota) => (
        <li key={nota.id}>
          
          <p>{nota.description}</p>
          <p>{nota.id}</p>
          <button onClick={() => handleDeleteNote(nota.id)}>Eliminar</button>
        </li>
      ))}
    </div>
  );
};