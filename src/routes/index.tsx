import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import Main from '../pages/Dashboard/Main'
import Patients from '../pages/Patients/Patients'
import Doctors from '../pages/Doctors/Doctors';

export const index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Main />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/pacientes" element={<Patients/>} />
                <Route path="/doctores" element={<Doctors/>} />
            </Routes>
        </Router >
    )
}
