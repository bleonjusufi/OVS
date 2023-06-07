import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/JS/home.jsx';
import About from './Components/JS/about.jsx';
import Register from './Components/JS/register.jsx';
import Login from './Components/JS/login.jsx';
import Article from './Components/JS/article.jsx';
import Lokal from './Components/JS/kandidatetLokal.jsx';
import Lokale from './Components/JS/zgjedhjetLokale.jsx';
import Contact from './Components/JS/contact.jsx';
import Users from './userCRUD/users.jsx';
import CreateUser from './userCRUD/createUser.jsx';
import Read from './userCRUD/readUser.jsx';
import Edit from './userCRUD/editUser.jsx';
import ParlamentareForm from './Components/JS/ParlamentareForm.jsx';
import votaLokale from './Components/JS/votaLokale.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <Route path='/read/:id' element={<Read />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path="/ParlamentareForm" element={<ParlamentareForm />} />
                    <Route path="/votaLokale" element={<votaLokale />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;