import './App.css'
import {  Routes, Route } from 'react-router-dom'

import Analysis from './components/Analysis'
import History from './components/History'
import Login from './components/Login'
import Home from './components/Home'

import Tracker from './Hero_page/ExpenseTracker'
function App() {
  return (
    <>
        <Routes>
          <Route path='/'  element={<Home />}>
            <Route index element={<Tracker />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="history" element={<History />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
