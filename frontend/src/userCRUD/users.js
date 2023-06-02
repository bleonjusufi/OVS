import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Users() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Lista e Perdoruesve</h2>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className='btn btn-success'>Create +</Link>
                </div>
                <table className='table'>
                        <tr>
                            <thead>ID</thead>
                            <thead>Emri dhe Mbiemri</thead>
                            <thead>Numri Personal</thead>
                            <thead>Actions</thead>
                        </tr>
                        <tbody>
                            {data.map((perdoruesit, index) => {
                                return <tr key={index}>
                                    <td>{perdoruesit.ID}</td>
                                    <td>{perdoruesit.fullName}</td>
                                    <td>{perdoruesit.nrPersonal}</td>
                                    <td>
                                        <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                                        <button className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;