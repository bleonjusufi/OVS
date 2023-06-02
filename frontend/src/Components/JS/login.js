import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../CSS/login.css';

export const Login = (props) => {
    const [NumriPersonal, setNumriPersonal] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(NumriPersonal);
    }

    return (
        <div className="auth-form-container">
            <h2>Kycu!</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="NumriPersonal">Numri Personal</label>
                <input value={NumriPersonal} onChange={(e) => setNumriPersonal(e.target.value)} type="number" placeholder="Numri Personal" id="Numri Personal" name="Numri Personal" />
                <label htmlFor="Fjalkalimi">Fjalkalimi</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="Fjalkalimi" name="Fjalkalimi" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn"><Link to="/register">Nuk keni llogari? Regjistrohuni ketu.</Link></button>
        </div>
    )
}
export default Login;