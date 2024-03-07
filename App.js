import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import './App.css';
import Home from './pages/Home';
import Chat from './pages/Chat';



function App() {
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
        </Routes>
    </Router>
  );
}

export default App;

