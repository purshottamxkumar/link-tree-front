import React from 'react';
import "./Login.css";

const Login = () => {
  return (
    <>
    <div className="login">
        <div className="card">
            <h1>WELCOME</h1>
            <form action="" className='form-element'>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <br />
                <br />
                <label htmlFor="username">Password:</label>
                <input type="text" id="password" name="password"/>
                <br />
                <br />
                <br />
                <input type="submit" value="Submit" id='btn'></input>
            </form>
        </div>
    </div>
    </>
  )
};

export default Login;