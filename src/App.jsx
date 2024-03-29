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

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/animals/:page' element={<Animals />} />
        <Route path='/characters/:page' element={<Characters />} />
        <Route path='/episodes/:page' element={<Episodes />} />
        <Route path='/spaceships/:page' element={<Spaceships />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
