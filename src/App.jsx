import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/Dashboard'
import ProtectedRoute from './routes/ProtectedRoute'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
     
      <main className=" mx-auto py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard/></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  )
}
