import React, { useState }from 'react'
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Sidebar from '../Sidebar';
import '../CSS/userInformation.css';

function PersonalInfo() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    
      const handleChange = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions with the form data, such as sending it to an API
        console.log(formData);
        // Reset the form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
        });
      };

    return (
        <>
            <Header />
            <Sidebar/>

           <div className='form-container'>
           <form onSubmit={handleSubmit}>
            <h1 className='headerInfo'>Profili im</h1>
                <label>
                    Emri Perdoruesit:
                    <input
                    type="text" 
                    name="firstName"
                    className='info'
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Numri Personal:
                    <input
                    type="text"
                    name="personalNumber"
                    className='info'
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Adresa Elektronike:
                    <input
                    type="email"
                    name="email"
                    className='info'
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Fjalekalimi:
                    <input
                    type="password"
                    name="passwordAcc"
                    className='info'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    />
                </label>

    </form>
           </div>
           <Footer/>

        </>
    )
}

export default PersonalInfo;