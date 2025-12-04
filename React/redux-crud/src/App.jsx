import React from 'react'
import UserRead from './Pages/UserRead'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import Header from './Coman/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<UserRead />} />
      <Route path='/create' element={<AddUser />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
