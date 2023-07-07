import React from 'react'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)
  console.log(user);
  return <div>
    <h1>Liat log untuk melihat redux log</h1>
  </div>
}

export default App

