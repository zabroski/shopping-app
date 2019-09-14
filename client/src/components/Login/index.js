import React from 'react'
import LoginForm from '../LoginForm'
import './Login.css'


function Login(props) {
    return(
        <div className="login">
            {/* <h1>Login</h1> */}
            <LoginForm {...props} />
        </div>
    )
}


export default Login