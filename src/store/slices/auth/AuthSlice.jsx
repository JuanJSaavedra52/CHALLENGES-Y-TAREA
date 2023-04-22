import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = () => ({
    name: 'auth',
    intialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email
        },
        logout: (state, action) => {

        },
        checkingCredentials: (state, action) => {
            console.log('checking')
        }
    }
})

export const { login, logout, checkingCredentials, } = AuthSlice.actions
