import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children, adminOnly=false }){
  const { token, role } = useSelector((s) => s.auth)
  if (!token) return <Navigate to="/login" replace />
  if (adminOnly && role !== 'admin') return <Navigate to="/" replace />
  return children
}
