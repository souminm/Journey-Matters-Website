import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Authentication({onChange}) {
    
  const navigate = useNavigate();
  useEffect(()=>{
    onChange()
  },[onChange])
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const USER1 = `${process.env.REACT_APP_USER1}`;
    const USER2 = `${process.env.REACT_APP_USER2}`;
    const USER3 = `${process.env.REACT_APP_USER3}`;
    const PASS1 = `${process.env.REACT_APP_PASSWORD1}`;
    const PASS2 =`${process.env.REACT_APP_PASSWORD2}`;
    const PASS3 =`${process.env.REACT_APP_PASSWORD3}`;
 
    // User Login info
    const database = [
      {
        username: USER1,
        password: PASS1
      },
      {
        username: USER2,
        password: PASS2
      },
      {
        username:USER3,
        password:PASS3
      }
    ];
   

    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
          toast.error("Invalid Password entered .")
        } else {
          setIsSubmitted(true);
          //console.log('authenticated');
       
        }
       
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
        toast.error("Invalid Username entered .")
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
    <div className="login-form">
      <div className="form">
        <form onSubmit={handleSubmit}>
        <p style={{textAlign:"center"}}>Login</p>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
          <ToastContainer/>
        </form>
      </div>
      </div>
    );


  
    return (
      <div className="app">
      <ToastContainer/>
          {isSubmitted ? navigate('/create-listing') :renderForm}
    </div>
    );
  
        

}

export default Authentication;