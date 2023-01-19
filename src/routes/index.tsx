import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../App';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';

export const BrowseRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/perfil' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
