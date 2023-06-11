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
                <label>
                    Numri Personal:
                    <input
                    type="number" step="1"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
    </form>
           </div>

        </>
    )
}

export default PersonalInfo;