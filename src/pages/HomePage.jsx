import React from 'react'
import { Link } from 'react-router-dom'
import { MainApp } from './MainApp'
import { NavComponent } from '../components/NavComponent'

export const HomePage = () => {
    return (
        <>
        <NavComponent />
            <div>
                <h1>Este es el Home</h1>
            </div>
        </>
    )
}
