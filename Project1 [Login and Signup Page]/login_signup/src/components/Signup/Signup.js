import React, { useState } from 'react'
import './Signup.css'
import mail_icon from '../images/mail.png'
import user_icon from '../images/user.png'
import padlock_icon from '../images/padlock.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  
  const [formData,setFormData]=useState({
    email:'',
    username:'',
    password:'',
    confirmPassword:''
  });
  const [errors,setErrors]=useState({});

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  };

  const validate=()=>{
    const newErrors = {};

        if (!formData.username || formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters long.';
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.password || formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        return newErrors;
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors=validate();
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length===0){
      alert('Form submitted successfully');
    }
  }
  
  
  return (    
    <div className='container'>
      <div className='heading'>
        <Link className="header" to='/' style={{textDecoration:'None'}}>Log In</Link>
        <div className="header gray">Sign Up</div>
      </div>
      
      <form className='inputs' onSubmit={handleSubmit}>
        <div className='email box'>
            <img className='img' src={mail_icon} alt='img'/>
            <input className='user' type='email' name='email' placeholder='Email Address' value={formData.email} onChange={handleChange}></input>
        </div>
        {errors.email && <span className='error'>{errors.email}</span>}
      
        <div className='username box'>
            <img className='img' src={user_icon} alt='img'/>
            <input className='user login' type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange}></input>
        </div>
        {errors.username && <span className='error'>{errors.username}</span>}
        
        <div className='password box'>
            <img className='img' src={padlock_icon} alt='img'/>
            <input className='user login' type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange}></input>            
        </div>
        {errors.password && <span className='error'>{errors.password}</span>}

        <div className='password box'>
            <img className='img' src={padlock_icon} alt='img'/>
            <input className='user' type='password' name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange}></input>
        </div>
        {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
        
        <div className='submit-container'>
        <button className='submit' type='submit'>Sign Up</button>
      </div>

      </form>
      

      
      <div className='bottom'>
        <Link to='/' className='forgot' style={{textDecoration:'None'}}>Already Member ?</Link>
      </div>
    </div>
 
  )
}

export default Signup;
