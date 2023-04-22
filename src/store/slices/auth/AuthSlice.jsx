import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
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
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoUrl = null
        },
        checkingCredentials: (state, action) => {
            console.log('checking')
        },
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.loading = false;
        },
    }
})

export const { login, logout, checkingCredentials, register, loginStart, loginSuccess, loginFailure, } = AuthSlice.actions
