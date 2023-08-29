import React from 'react'
import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import "./Login.css";

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/")
        }
    },[])

    const handleLogin = async ()=>{
        console.log(email,password);
        let result = await fetch("http://localhost:5000/user/login",{
            method:'post',
            body: JSON.stringify({email,password}),
            headers: {"Content-Type":"application/json"}
        })

        result = await result.json()
        console.log(result.success);
        if(result.email){
            localStorage.setItem("user",JSON.stringify(result));
            console.log(result);
            navigate("/")
        }else{
            alert("Enter Correct email and password");
        }   
    }

    return (

        <div className="login-form">
            <h1 className="formHead">Login</h1>
            <input className="inputBox" type="text" placeholder="Enter your email" value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>

            <input className="inputBox" type="password" placeholder="Enter your password" value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin} className="appButton" type="button">Log in</button>
        </div>
    )
}

export default Login;