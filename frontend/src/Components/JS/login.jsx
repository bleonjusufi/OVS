import React from "react";
import { Link } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
// import axios from "axios";
import '../CSS/login.css';

function Login() {

    return (
        <div className="wrapper">
        <div className="container">
            <div className="main">
            <div className="login-form">
                <form action="">
                    <div>
                    <label htmlFor="numriPersonal">Numri Personal</label><br></br>
                    <input type="number" placeholder="Numri Personal" className="login-input"  name="numriPersonal" />
                    <br></br>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="password">Fjalekalimi</label><br></br>
                    <input type="password" placeholder="Fjalekalimi" className="login-input"  name="password" />
                    <br></br>
                    </div>
                    <br></br>
                    <button type="submit"  className="login-button">Kycu</button>
                    <br></br>
                    <Link to='/register' className="link">Krijoni Llogari</Link>
                </form>
            </div>
        </div>
        </div>
        </div>
    //     <div className="main">
    // <div class="container">
    //   <div class="log-in__container">
    //   <form id="form" class="form" autocomplete="off">
    //     <h2>Kycuni</h2>
    //     <div class="form-control">
    //         <label htmlFor="numripersonal">Numri Personal</label>
    //         <input
    //           type="number"
    //           id="numripersonal"
    //           name="numripersonal"
    //           placeholder="Shëno numrin personal"
    //         />
    //       </div>
    //       <div class="form-control">
    //         <label htmlFor="password">Fjalekalimi</label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           placeholder="Shëno fjalëkalimin"
    //         />
    //       </div>
    //       <div class="buttons">
    //         <Link to="/" class="cancel-button">Kthehu Mbrapa</Link>
    //         <button type="submit">Kycu</button>
    //       </div>
    //   </form>
    //   </div>
    //   </div>
    //   </div>
    )
}

export default Login