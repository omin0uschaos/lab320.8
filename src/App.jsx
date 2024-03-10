import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
