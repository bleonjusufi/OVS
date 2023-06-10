import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Add = () => {
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
      <div className="form">
        <h1>Add New User</h1>
        <input
          type="text"
          placeholder="Emri dhe Mbiemri"
          name="emri"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="numripersonal"
          name="numripersonal"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Adresa Elektronike"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Fjalekalimi"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
        {error && "Something went wrong!"}
        <Link to="/">See all books</Link>
      </div>
    );
  };

export default Add
