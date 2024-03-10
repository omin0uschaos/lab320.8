import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Animals from './pages/Animals'
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import Spaceships from './pages/Spaceships'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/spaceships' element={<Spaceships />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
