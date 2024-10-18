import React from 'react';
import Navbar from '../components/Navbar';
import ReservationForm from '../components/ReservationForm';

const Form = () => {

    return (
        <div  style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1529539795054-3c162aab037a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxvZ2lufGVufDB8fDB8fHww')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '100vh' 
          }} 
    >
            <Navbar/>
            <ReservationForm/>
        </div>
    );
};

export default Form;