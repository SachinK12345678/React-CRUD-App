import React from 'react'
import { BrowserRouter as Router , Routes, Route, useParams } from 'react-router-dom'
import Create from './Crud/Create';
import Nav from './Crud/Nav';
import Home from './Crud/Home';
import Read from './Crud/Read';
import Update from './Crud/Update';
import './Crud/Crud.css'

const App = () => {
  let {id}=useParams()
  return (
    
    <Router>
    <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/read' element={<Read/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/read/update/:id' element={<Update/>}/>
         


        </Routes>
    </Router>
  )
}

export default App
