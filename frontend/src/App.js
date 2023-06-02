import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Components/CSS/home.css';
import Home from './Components/JS/home.js';
import About from './Components/JS/about.js';
import Register from './Components/JS/register.js';
import Login from './Components/JS/login.js';
import Article from './Components/JS/article.js';
import Lokal from './Components/JS/kandidatetLokal.js';
import Lokale from './Components/JS/zgjedhjetLokale.js';
import Contact from './Components/JS/contact.js';
import Users from './userCRUD/users.js';
import CreateUser from './userCRUD/createUser.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/article" element={<Article />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/kandidatetLokal" element={<Lokal />} />
                    <Route path="/zgjedhjetLokale" element={<Lokale />} />
                    <Route path="/users" element={<Users /> } /> 
                    <Route path='/create' element={<CreateUser />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;