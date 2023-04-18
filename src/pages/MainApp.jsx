import React from 'react'
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
    )
}
