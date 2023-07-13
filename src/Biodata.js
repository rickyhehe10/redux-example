import React from 'react'
import { useSelector } from 'react-redux'

function Biodata() {
  const user = useSelector(state => state.user)
  return (
    <div>
      <h1>Biodata</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Biodata
