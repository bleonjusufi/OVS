import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit(){

    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
        .then(res => {
            console.log(res)
            setValues({...values, fullName: res.data[0].fullName, nrPersonal: res.data[0].nrPersonal});
        })
        .catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        fullName: '',
        nrPersonal: ''
    })
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id , values)
        .then(res => {
            console.log(res);
            navigate('/users')
        }).catch(err => console.log(err));
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Perditeso te dhenat</h2>
                    <div className="mb-2">
                        <label htmlFor="">Emri</label>
                        <input type="text" placeholder="Emri dhe Mbiemri" className="form-control" value={values.fullName} onChange={e => setValues({...values, fullName: e.target.value})} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Numri Personal</label>
                        <input type="number" placeholder="Numri Personal" className="form-control" value={values.nrPersonal} onChange={e => setValues({...values, nrPersonal: e.target.value})} />
                    </div>
                    <button type='submit' className="btn btn-success">Perditeso</button>
                </form>
            </div>
        </div>
    )
}

export default Edit;