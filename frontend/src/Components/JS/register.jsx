import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../CSS/register.css';

const Register = () => {
    const [user, setUser] = useState({
      name: "",
      numripersonal: "",
      email: "",
      password: "",
    });
    const [error,setError] = useState(false)
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8081/users", user);
        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true)
      }
    };
  
    return (
    //     <div className="wrapper">
    //         <div className="container">
    //             <div className="main">
    //   <div className="form">
    //     <h1 className="sign-up__title">Regjistrohuni</h1>
    //     <input
    //       type="text"
    //       placeholder="Emri dhe Mbiemri"
    //       name="emri"
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="number"
    //       placeholder="numripersonal"
    //       name="numripersonal"
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="email"
    //       placeholder="Adresa Elektronike"
    //       name="email"
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Fjalekalimi"
    //       name="password"
    //       onChange={handleChange}
    //     />
    //     <button onClick={handleClick}>Regjistrohu</button>
    //     {error && "Something went wrong!"}
    //     <Link to="/login">Keni llogari, kycuni</Link>
    //   </div>
    //   </div>
    //   </div>
    //   </div>
    <div className="main">
    <div class="container">
      <div class="log-in__container">
        <form id="form" class="form" autocomplete="off">
          <h2>Regjistrohu</h2>
          <div class="form-control">
            <label htmlFor="name">Emri i përdoruesit</label>
            <input
              type="text"
              id="username"
              name="emri"
              placeholder="Shëno emrin tuaj të përdoruesit"
              onChange={handleChange}
            />
          </div>
          <div class="form-control">
            <label htmlFor="numripersonal">Numri Personal</label>
            <input
              type="number"
              id="numripersonal"
              name="numripersonal"
              placeholder="Shëno numrin personal"
              onChange={handleChange}
            />
          </div>
          <div class="form-control">
            <label htmlFor="email">Adresa Elektronike</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Shëno adresen elektronike"
              onChange={handleChange}
            />
          </div>
          <div class="form-control">
            <label htmlFor="password">Fjalekalimi</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Shëno fjalëkalimin"
              onChange={handleChange}
            />
          </div>
          <div class="buttons">
            <Link to="/" class="cancel-button">Kthehu Mbrapa</Link>
            <button onClick={handleClick} type="submit">Regjistrohu</button>
            {error && "Something went wrong!"}
          </div>
          <Link to="/login" className="link">Keni llogari, kycuni</Link>

        </form>
      </div>
    </div>
    </div>
    );
  };
export default Register;