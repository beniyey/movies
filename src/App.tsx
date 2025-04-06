
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import AddMovie from './components/AddMovie'
import SearchMovie from './components/SearchMovie'
import DeleteMovie from './components/DeleteMovie'
import TopRated from './components/TopRated'

function App() {

  return (
    <div className='flex flex-col min-h-dvh w-full justify-center p-8'>
      <div className='  h-fit'>
        <NavBar />
      </div>

      <div className=' w-full h-fit'>
        <TopRated />
      </div>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/add' element={<AddMovie />} />
        <Route path='/search' element={<SearchMovie />} />
        <Route path='/delete' element={<DeleteMovie />} />
      </Routes>
    </div>
  )
}

export default App
