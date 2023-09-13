import React from 'react';
import './App.css';
import Navbar from './header';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home.js';
import KeyInfo from './pages/KeyInfo/KeyInfoPage';
import About from './pages/About/about';
import Login from './pages/Login/login';
import Register from './pages/Register/register';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/keyInfo' element={<KeyInfo />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

            </Routes>
        </Router>
    );
}
 
export default App;