import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PagePrincipal } from '../pages/PagePrincipal'

export const RoutesApp = () => {
  return (
    <Routes>

        <Route path='/main/*' element={<PagePrincipal/>} />

    </Routes>
  )
}
