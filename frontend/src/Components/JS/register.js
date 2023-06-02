import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../CSS/login.css';

export const Register = (props) => {
    const [NumriPersonal, setNumriPersonal] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(NumriPersonal);
    }

    return (
        <div className="auth-form-container">
            <h2>Regjistrohuni!</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Emri dhe Mbiemri</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Emri dhe Mbiemri" />
                <label htmlFor="NumriPersonal">NumriPersonal</label>
                <input value={NumriPersonal} onChange={(e) => setNumriPersonal(e.target.value)} type="number" placeholder="NumriPersonal" id="NumriPersonal" name="NumriPersonal" />
                <label htmlFor="Fjalkalimi">Fjalkalimi</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="Fjalkalimi" name="Fjalkalimi" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn"><Link to='/login'>Nese keni nje llogari vazhdoni ketu.</Link></button>
        </div>
    )
}
export default Register;