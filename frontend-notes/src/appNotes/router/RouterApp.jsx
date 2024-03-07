import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutesApp } from '../routes/RoutesApp'

export const RouterApp = () => {
  return (
    <Routes>

      {/* Rutas de app */}

      <Route path='/notes/*' element={<RoutesApp/>} />

    </Routes>
  )
}
