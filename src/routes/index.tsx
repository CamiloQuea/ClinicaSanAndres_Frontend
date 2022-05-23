import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import Main from '../pages/Dashboard/Main'

export const index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Main />} />
                <Route path="/" element={<Dashboard />} />
                
            </Routes>
        </Router >
    )
}
