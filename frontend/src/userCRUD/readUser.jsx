import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Read() {
    const {id} = useParams();
    const [perdoruesit, setPerdoruesit] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
        .then(res => {
            console.log(res)
            setPerdoruesit(res.data[0]);
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <div className='p-2'>
                <h2>Detajet e Perdoruesit</h2>
                <h2>{perdoruesit.ID}</h2>
                <h2>{perdoruesit.fullName}</h2>
                <h2>{perdoruesit.nrPersonal}</h2>
                <Link to='/users' className='btn btn-primary me-2'>Kthehu Mbrapa</Link>
                <Link to={`/edit/${perdoruesit.ID}`} className='btn btn-info'>Ndrysho</Link>
                </div>
            </div>
        </div>
    )
}

export default Read;