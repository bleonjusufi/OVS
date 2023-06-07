import React, { Component } from 'react';
import '../CSS/parlamentare.css';
import { Link } from 'react-router-dom';

class ParlamentareForm extends Component {
    render() {

            return (
                <>
                    <div className="divClass">
                        <h1 className="header1">Zgjedhjet Parlamentare jane HAPUR!</h1>
                        <p className="paragraphs">Ne menyre qe vota te jete e vlefshe, zgjedhni partin dhe numrat perkates te 5 kandidateve te asaj partie.</p>

                        <div className='flexbox-container'>
                            <div className='flexbox-item flexbox-item-1'>
                                <label>
                                     1
                                    <input
                                    type="checkbox"
                                    />
                                    
                                    </label>
                            </div>
                            <div className='flexbox-item flexbox-item-2'></div>
                            <div className='flexbox-item flexbox-item-3'></div>
                            <div className='flexbox-item flexbox-item-4'></div>
                            <div className='flexbox-item flexbox-item-5'></div>
                        </div>
                     
                          

                        <Link to="">
                            <button className="button1">Dergo Voten!</button>
                        </Link>
                    </div>
                </>
            );
        }
    }


export default ParlamentareForm;

