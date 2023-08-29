import React from 'react';
import './LoginForm.css'

function Authentication() {
    return (
        <div className='login'>
            <h2 className='mb-5'>Login! </h2>

            <div className='form-group mb-2'>
                <label style={{paddingRight:"10px"}} htmlFor='email'><b>Email Address:</b></label>
                <input type ="email"></input>
            </div>
            <div className='form-group mb-3'>
                <label  style={{paddingRight:"43px"}}htmlFor='password'><b>Password:</b></label>
                <input type ="password"></input>
            </div>
            <div className='form-group mb-2'>
                <input type ="checkbox"></input>
                <label htmlFor='checkbox'>Remember me</label>
            </div>
            <button style={{width:"100px", marginLeft:"630px"}}type='submit' className='btn btn-success'>Sign In</button>
        </div>
        
    );
}

export default Authentication;