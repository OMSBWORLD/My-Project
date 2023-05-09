import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Omsb from './Pages/Omsb'
import EditUsers from './Pages/EditUsers'
import SingleUser from './Pages/SingleUser'

function App() {
  

  return (
      <div>
           <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>   
                    <Route path='/*'  element={<Omsb/>}/>
                    <Route path='/edit/:id' element={<EditUsers/>}/>
                    <Route path='/user/:id' element={<SingleUser/>}/>      
                </Routes>
           </BrowserRouter>
      </div>
    
  )
}

export default App
