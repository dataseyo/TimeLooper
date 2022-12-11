import react from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import {
  Home
} from './pages'
import {
  Sidebar,
  Char
} from './components'

function App() {
  return (
    <div className="App">
      <Sidebar
        children={
          <Routes>
            <Route index element={<Char/>}/>
            <Route path="/*" element={<Home/>}/>
          </Routes>
        }
      />
    </div>
  )
}

export default App
