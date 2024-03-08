import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setId, setInput } from '../../store/NoteSlice';
import { instance } from '../../Api/GetApi';

export const Note = () => {
  
  const dispatch = useDispatch();

  const description = useSelector((state) =>state.notes.valueInput)
  const idFront = useSelector((state) =>state.notes.idUnico)

  const [inputform, setInputform] = useState("")

  const handleInput = (e) =>{
    setInputform(e.target.value)
  }

  const handleForm = (event) =>{
    event.preventDefault()
    dispatch(setInput(inputform))
    
  }

  useEffect(() => {
    const crearNote = async() =>{
      const response  = await instance.post('http://localhost:8080/notes',{description})
      const newNote = response.data;
      dispatch(setId(newNote.id));
    }

    crearNote();
    
  }, [description])
  

  return (
    <div>

    <form 

    onSubmit={handleForm}
    >

      <div>
        <input onChange={handleInput}
         value={inputform}
         type="text"
         placeholder='title here'/>
      </div>

    </form>

    </div>
  )
}
