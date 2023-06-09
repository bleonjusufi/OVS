import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../CSS/login.css';
// import Validation from "./loginValidation";

function Login() {
    // const [values, setValues] = useState({
    //     numriPersonal: '',
    //     password: ''
    // })
    // const [errors, setErrors] = useState({})
    // const handleInput = (event) => {
    //     setValues(prev => ({...prev, [event.target.numriPersonal]: [event.target.value]}))
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    // }
    return (
        <div className="wrapper">
        <div className="container">
            <div className="main">
            <div className="login-form">
                <form action="" >
                    <div>
                    <label htmlFor="numriPersonal">Numri Personal</label><br></br>
                    <input type="number" placeholder="Numri Personal" className="login-input"  name="numriPersonal"/>
                    <br></br>
                    {/* {errors.numriPersonal && <span className="error-msg">{errors.numriPersonal}</span>} */}
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="password">Fjalekalimi</label><br></br>
                    <input type="password" placeholder="Fjalekalimi" className="login-input"  name="password"/>
                    <br></br>
                    {/* {errors.password && <span className="error-msg">{errors.password}</span>} */}
                    </div>
                    <br></br>
                    <button type="submit" className="login-button">Kycu</button>
                    <br></br>
                    <Link to='/register' className="link">Krijoni Llogari</Link>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Login