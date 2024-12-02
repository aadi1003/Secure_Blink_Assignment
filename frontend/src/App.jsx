import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ResetPassword from './ResetPassword'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/reset-password/:token' element={<ResetPassword/>} />
      </Routes>
    </div>
  )
}

export default App
