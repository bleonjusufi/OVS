import React, { Component } from 'react';
import '../CSS/parlamentare.css';
import { Link } from 'react-router-dom';

class ParlamentareForm extends Component {
    render() {

            return (
                <>
                    <div className="divClass">
                        <h1 className="header1">Zgjedhjet Parlamentare jane HAPUR!</h1>

                        <div className="wrapperClass">
                            <p className="paragraphs">Ne menyre qe vota te jete e vlefshe, zgjedhni partin dhe numrat perkates te 5 kandidateve te asaj partie.</p>

                            <div className="checkboxs">
                                <label className="label1">
                                    <input type="checkbox" name="candidate1" className="can1" />
                                    Levizja Vetevendosje -VV
                                </label>

                                <label className="label1">
                                    <input type="checkbox" name="candidate1" className="can1" />
                                    Lidhja Demokratike e Kosoves - LDK
                                </label>

                                <label className="label1">
                                    <input type="checkbox" name="candidate1" className="can1" />
                                    Partia Demokratike e Kosoves - PDK
                                </label>

                                <label className="label1">
                                    <input type="checkbox" name="candidate1" className="can1" />
                                     Aleanca per Ardhmerin e Kosoves - AAK
                                </label>
                                <br/>
                                <label className="label1">
                                    <input type="checkbox" name="candidate1" className="can1" />
                                        NISMA
                                </label>

                                <div className="numbers">
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        1
                                    </label>

                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        2
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        3
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        4
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        5
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        6
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        7
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        8
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        9
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        10
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        11
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        12
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        13
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        14
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        15
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        16
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        17
                                    </label>
                                    <label className="label1">
                                        <input type="checkbox" name="candidate1" className="can1" />
                                        18
                                    </label>
                                </div>
                            </div>
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

