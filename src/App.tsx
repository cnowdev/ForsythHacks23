import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EndScreen from './endscreen'
import Quiz from './components/Quiz'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Quiz/>}/>
          <Route path='/results/:usage' element={<EndScreen kWh={0}/>}/>
        </Routes>
      </div>
    </>
  )

  useEffect(() => {
    document.title = 'Energy Quiz'
  }, [])
  
}

export default App
