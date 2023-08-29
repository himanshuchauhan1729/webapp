import React,{useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import "./Nav.css"
import "../../color.css";

const Nav = ()=>{

    const auth = localStorage.getItem('user');

    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.clear()
        navigate('/signup')
    }
    return (

        <div className="nav-bar">
            <div className="title-box">
                <li style={{listStyle:"none"}}><Link to="/" className="my-title"><span style={{color: "var(--light-grey-color)"}}>EcO</span><span>-camOX</span></Link></li>
            </div>
            {
                auth?
                <div className="nav-button">
                    <ul className="nav-ul">
  
                    
                    {/* <li><Link to="/add">Add Product</Link></li> */}
                    {/* <li><Link to="/update">Update Product</Link></li> */}
                    
                    <li ><Link to="/signup" className="logout" onClick = {logout}>Log Out</Link></li>
                    <li ><Link to="/profile" className="profile-icon">Profile</Link></li>
                    </ul>
                </div>: null
                
            }
                
            
            
        </div>
    );
}

export default Nav;