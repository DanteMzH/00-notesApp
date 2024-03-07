import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput } from '../../store/NoteSlice';

export const Note = () => {
  
  const dispatch = useDispatch();


  const [inputform, setInputform] = useState("")

  const handleInput = (e) =>{
    setInputform(e.target.value)
  }

  const handleForm = (event) =>{
    event.preventDefault()
    dispatch(setInput(inputform))
    
  }


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
