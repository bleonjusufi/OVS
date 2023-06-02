import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ak from '../../images/ak.jpg';
import pr from '../../images/pr.jpg';
import ramush from '../../images/ramush.png';
import bp from '../../images/behgjetii.jpg';
import ui from '../../images/Uran.jpg';
// import './kandidatetLokal.css';

export class kandidatetLokal extends Component {


    render() {
        return (
            <>
                <div className="div1">
                    <h1 className="headers">Zgjedhjet Lokale jane HAPUR!</h1>

                    <div className="wrapper">
                        <h2 className="candidates">Kandidatet e vitit 2024</h2>

                        <div className="cards-container">
                            <div className="card">
                                <img src={ak} alt="My Image" />
                                <p className="text">Albin Kurti - VV </p>
                            </div>

                            <div className="card">
                                <img src={pr} alt="My Image" />
                                <p className="text">Perparim Rama - LDK </p>
                            </div>

                            <div className="card">
                                <img src={ramush} alt="My Image" />
                                <p className="text">Ramush Haradinaj -  AAK </p>
                            </div>

                            <div className="card">
                                <img src={ui} alt="My Image" />
                                <p className="text">Uran Ismaili - PDK </p>
                            </div>

                            <div className="card">
                                <img src={bp} alt="My Image" />
                                <p className="text">Behgjet Pacolli - AKR </p>
                            </div>
                        </div>

                        <Link to="/voto">
                            <button className="my-button">Voto tani!</button>
                        </Link>

                    </div>


                </div>

            </>
        );
    }
}
export default kandidatetLokal;