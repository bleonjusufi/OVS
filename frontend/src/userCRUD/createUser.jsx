import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [values, setValues] = useState({
        fullName: '',
        nrPersonal: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/Perdoruesit', values)
        .then(res => {
            console.log(res);
            navigate('/users');
        })
        .catch(err => console.log(err));
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Shto Perdorues</h2>
                    <div className="mb-2">
                        <label htmlFor="">Emri</label>
                        <input type="text" placeholder="Emri dhe Mbiemri" className="form-control" onChange={e => setValues({...values, fullName: e.target.value})} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Numri Personal</label>
                        <input type="number" placeholder="Numri Personal" className="form-control" onChange={e => setValues({...values, nrPersonal: e.target.value})} />
                    </div>
                    <button type='submit' className="btn btn-success">Shto Perdoruesin</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;