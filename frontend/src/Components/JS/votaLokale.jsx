import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/votaLokaleForm.css';



class votaLokale extends Component {
    render() {
        
            return (
                <>
                    <div className="container3">

                        <div className="text-boxx">
                            <h1 className="header3">Zgjedh kryeministrin e vendit!</h1>

                            <p className="paragraph3">Ne menyre qe vota te jete e vlefshe, zgjedhni vetem njerin kandidat.</p>
                        </div>

                        <div className="wrapper3">
                            <label className="lab">
                                <input type="checkbox" name="candidate1"/>
                                Albin Kurti- VV
                            </label>
                            

                            <label className="lab">
                                <input type="checkbox" name="candidate2" />
                                Perparim Rama - LDK
                            </label>
                            <br />

                            <label className="lab">
                                <input type="checkbox" name="candidate3"  />
                                Uran Ismaili - PDK
                            </label>

                            <label className="lab">
                                <input type="checkbox" name="candidate5"  />
                                 Ramush Haradinaj - AAK
                            </label>
                        

                            <label className="lab">
                                <input type="checkbox" name="candidate4" />
                                Behgjet Pacolli - AKR
                            </label>
                            <br />


                            <label className="lab">
                                <input type="checkbox" name="candidate5"  />
                                 Fatmir Limaj - NISMA
                            </label>
                          
                        </div>

                        <Link to="">
                            <button className="button3">Dergo Voten!</button>
                        </Link>
                    </div>
                </>
            );
        }

       
    }


export default votaLokale;
