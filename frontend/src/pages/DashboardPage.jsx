import React from 'react'
import Navbar from '../components/Navbar'

function DashboardPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-base-content/70">Welcome to your Talent Hunter dashboard!</p>
      </div>
    </div>
  )
}

export default DashboardPage