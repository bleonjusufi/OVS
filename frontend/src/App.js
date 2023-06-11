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
import Add from './userCRUD/createUser.jsx';
import Read from './userCRUD/readUser.jsx';
import Edit from './userCRUD/editUser.jsx';
import ParlamentareForm from './Components/JS/ParlamentareForm.jsx';
<<<<<<< HEAD
import PersonalInfo from './Components/JS/personalInfo.jsx';
import votaLokale from './Components/JS/votaLokale.jsx';


// import 'bootstrap/dist/css/bootstrap.min.css';
=======
import VotaLokale from './Components/JS/VotaLokale.jsx';
import Voto from './Components/JS/votoketu.jsx';
import Zgjedhjet from './Components/JS/zgjedhjet.jsx';
import Vetvendosje from './Components/JS/vvpage.jsx';
import Pdk from './Components/JS/pdkpage.jsx';
import seeArticlePage from './Components/JS/seearticle.jsx';
import Ldk from './Components/JS/lidhjademokratike.jsx';
>>>>>>> b71b512bcbcc3b695804dde4d7df467751b030ae

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
                    <Route path='/create' element={<Add />} />
                    <Route path='/read/:id' element={<Read />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path="/ParlamentareForm" element={<ParlamentareForm />} />
<<<<<<< HEAD
                    <Route path="/votaLokale" element={<votaLokale/>} />
                    <Route path="/personalInformation" element={<PersonalInfo/>} />
                    </Routes>
=======
                    <Route path="/votaLokale" element={<VotaLokale/>} />
                    <Route path="/votoketu" element={<Voto/>}/>
                    <Route path="/zgjedhjet" element={<Zgjedhjet/>}/>
                    <Route path="/vvpage" element={<Vetvendosje/>}/>
                    <Route path="/pdkpage" element={<Pdk/>}/>
                    <Route path="/seearticle" element={<seeArticlePage/>}/>
                    <Route path="/lidhjademokratike" element={<Ldk/>}/>
                </Routes>
>>>>>>> b71b512bcbcc3b695804dde4d7df467751b030ae
            </Router>
        </>
    )
}

export default App;
