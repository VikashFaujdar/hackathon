import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import PatientDashboard from './Pages/PatientDashboard'
import DoctorDashboard from './Pages/DoctorDashboard'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    </Routes>
    </>
  )
}

export default App