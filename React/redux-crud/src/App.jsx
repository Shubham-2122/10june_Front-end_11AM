import React from 'react'
import UserRead from './Pages/UserRead'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import Header from './Coman/Header'
import ProdRead from './Pages/ProdRead'
import ProductAdd from './Pages/ProductAdd'
import EditU from './Pages/EditU'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<UserRead />} />
        <Route path='/create' element={<AddUser />} />
        <Route path='/pro' element={<ProdRead />} />
        <Route path='/proadd' element={<ProductAdd />} />
        <Route path='/edit/:id' element={<EditU />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
