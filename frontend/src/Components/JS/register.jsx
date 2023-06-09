import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/register.css';
// import Validation from "./signupValidation";
// import axios from "axios";

function Register() {

    // const [values, setValues] = useState({
    //     emri: '',
    //     numriPersonal: '',
    //     email: '',
    //     password: ''
    // })
    // const navigate = useNavigate();
    // const [errors, setErrors] = useState({})
    // const handleInput = (event) => {
    //     setValues(prev => ({...prev, [event.target.numriPersonal]: [event.target.value]}))
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    //     if(errors.emri === "" && errors.numriPersonal === "" && errors.email === "" && errors.password === ""){
    //         axios.post('http://localhost:8081/signup', values)
    //         .then(res => {
    //             navigate('/login')
    //         })
    //         .catch(err => console.log(err))
    //     }
    // }
    return (
        <div className="wrapper">
        <div className="container">
            <div className="main">
            <div className="register-form">
                <form action="" >
                <div>
                    <label htmlFor="emri"><strong>Emri dhe Mbiemri</strong></label> <br></br>
                    <input type="text" placeholder="Emri dhe Mbiemri" className="register-input" name="emri"/>
                    {/* {errors.emri && <span className="error-msg">{errors.emri}</span>} */}
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="numriPersonal"><strong>Numri Personal</strong></label> <br></br>
                    <input type="number" placeholder="Numri Personal" className="register-input"/>
                    {/* {errors.numriPersonal && <span className="error-msg">{errors.numriPersonal}</span>} */}
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="email"><strong>Adresa Elektronike</strong></label> <br></br>
                    <input type="email" placeholder="Adresa Elektronike" className="register-input"/>
                    {/* {errors.email && <span className="error-msg">{errors.email}</span>} */}
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="password"><strong>Fjalekalimi</strong></label> <br></br>
                    <input type="password" placeholder="Fjalekalimi" className="register-input"/>
                    {/* {errors.password && <span className="error-msg">{errors.password}</span>} */}
                    </div>
                    <br></br>
                    <button type="submit" className="signup-button">Regjistrohu</button>
                    <br></br>
                    <Link to='/login' className="link">Keni Llogari, Kycuni !</Link>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Register;