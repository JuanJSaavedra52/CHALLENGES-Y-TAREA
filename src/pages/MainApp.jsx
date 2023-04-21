import React from 'react'
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { ProductsPage } from '../components/ProductsPage';
import { App } from '../App';

export const MainApp = () => {
    return (

        // <NavLink to="products/J" >Product by ID</NavLink>
        <Routes>
            <Route path="products">
                <Route path=':id' element={<ProductsPage />} />
            </Route>
            <Route path='/' element={<App/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/app' element={<LoginPage/>}/>
        </Routes>
    )
}

