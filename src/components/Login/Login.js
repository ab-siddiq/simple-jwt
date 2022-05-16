import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,'=>',password)

        fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({email,password})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                localStorage.setItem('accessToken',data.accessToken);
                navigate('/orders');
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type='email' name='email' placeholder='email'></input>
                <input type='password' name='password' placeholder='password'></input>
                <input type='submit'  value='login'></input>
            </form>
        </div>
    );
};

export default Login;