import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/votaLokaleForm.css';



class votaLokale extends Component {
    render() {
        
            return (
                <>
                    <div className="container2">

                        <div className="text-box">
                            <h3 className="header">Zgjedh kryeministrin e vendit!</h3>

                            <p className="paragraph">Ne menyre qe vota te jete e vlefshe, zgjedhni vetem njerin kandidat.</p>
                        </div>

                        <div className="wrapper2">
                            <label className="label1 can">
                                <input type="checkbox" name="candidate1" className="can1" />
                                Albin Kurti- VV
                            </label>
                            

                            <label className="label1 can">
                                <input type="checkbox" name="candidate2" className="can1" />
                                Perparim Rama - LDK
                            </label>
                            <br />

                            <label className="label1">
                                <input type="checkbox" name="candidate3" className="can1" />
                                Uran Ismaili - PDK
                            </label>
                        

                            <label className="lab label1">
                                <input type="checkbox" name="candidate4" className="can1" />
                                Behgjet Pacolli - AKR
                            </label>
                            <br />

                            <label className="lab2 label1">
                                <input type="checkbox" name="candidate5" className="can1" />
                                 Ramush Haradinaj - AAK
                            </label>
                          
                        </div>

                        <Link to="/votaLokale">
                            <button className="button">Dergo Voten!</button>
                        </Link>
                    </div>
                </>
            )
        }

       
    }


export default votaLokale;
