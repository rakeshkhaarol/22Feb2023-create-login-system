//import area
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import Register from './pages/Register';





//function definetion area
 let App=()=> {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='Register' element={<Register/>}></Route>
            </Route>
                <Route path='Login' element={<Login/>}></Route>
                <Route path='*' element={<Notfound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

//export area
export default App;