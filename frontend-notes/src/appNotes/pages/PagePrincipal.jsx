import React from 'react'
import { AsideApp } from '../components/AsideApp'
import { Header } from '../components/Header'
import { SectionMain } from '../components/SectionMain'
import { Note } from '../components/Note'
import { Route, Router, Routes } from 'react-router-dom'

export const PagePrincipal = () => {
  return (

    <>
        <Header/>
        <AsideApp/>
        <Routes>

            <Route path='/notes' element={<SectionMain/>} />
            <Route path='/new' element={<Note/>} />
            
        </Routes>
    </>

  )
}
