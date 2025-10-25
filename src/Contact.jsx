import React from 'react'
import './Contact'
import './Contact.css'
import Navbar from './Navbar.jsx'


function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='heading'>Contact</h1>
      <Navbar activeMenu="/Contact"/>
    </div>
  )
}

export default Contact
