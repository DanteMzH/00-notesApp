import React from 'react'
import { Link } from 'react-router-dom'

export const AsideApp = () => {
  return (
    <>
      <li>
        <Link to="/notes/main/notes">All Note</Link>
      </li>

      <li>
        <Link to="/notes/main/new">Notes</Link>
      </li>
    </>
  )
}
