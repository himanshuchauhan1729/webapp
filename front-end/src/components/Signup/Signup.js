import React,{useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import "./Signup.css"
import Login from  "../Login/Login"
const Signup = ()=>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [option,setOption] = useState('Signup');

    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })

    const collectData = async ()=>{
        console.log(name,email,password)
        const data = await fetch("http://localhost:5000/user/register",{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers: {
                'Content-Type':'application/json'
            }
        });
        let result = await data.json();
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result))

        if(result){
            navigate('/')
        }
    }

    const handleOption = (option)=>{
        setOption(option);
    }

    return(
        <div className="form">


            <div className="option">
                <button className="buttons" onClick={()=>{handleOption('Login')}}>Login</button>
                <button className="buttons" onClick={()=>{handleOption('Signup')}}>Signup</button>
            </div>
           
           <div>
            {option === 'Login' && <Login/>}

            {option === 'Signup' && 
            <div className="register-form">
            <h1 className="formHead">Register</h1>
            <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name: eg. John" type="text" />
            <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email: eg. john@gmail.com" type="text" />
            <input className="inputBox" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" />
            <button className="buttons" type="button" onClick={collectData}>Sign Up</button>
            </div>}
           </div>
            
        </div>
        
    )
}

export default Signup;