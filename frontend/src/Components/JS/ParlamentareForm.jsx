import React, { Component } from 'react';
import '../CSS/parlamentare.css';
import { Link } from 'react-router-dom';

class ParlamentareForm extends Component {
  generateCheckboxes(count) {
    const checkboxes = [];

    for (let i = 1; i <= count; i++) {
      checkboxes.push(
        <label key={i}>
          <input type="checkbox" />
          {i}
        </label>
      );
    }

    return checkboxes;
  }

  render() {
    return (
      <>
        <div className="divClass">
          <h1 className="header1">Zgjedhjet Parlamentare jane HAPUR!</h1>
          <p className="paragraphs">
            Ne menyre qe vota te jete e vlefshme, zgjedhni partin dhe numrat perkates te 5 kandidateve te asaj partie.
          </p>

          <div className="flexbox-container">
          <label>
              <input type="checkbox" />
              133 LVV
            </label>

            <label>
              <input type="checkbox" />
              134 PDK
            </label>

            <label>
              <input type="checkbox" />
              135 LDK
            </label>

            <label>
              <input type="checkbox" />
              136 AAK
            </label>

            <label>
              <input type="checkbox" />
              137 AKR
            </label>
           
          </div>

          <div className='checkbox2'>
            {this.generateCheckboxes(120)}
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
