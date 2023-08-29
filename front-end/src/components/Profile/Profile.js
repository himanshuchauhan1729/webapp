    import React,{useEffect,useState} from 'react';
    import {Link,useNavigate} from 'react-router-dom';
    import AddProduct from "../AddProduct/AddProduct";
    import Chat from "../Chat/Chat"
    import Product from "../Products/Products"
    import "./Profile.css"

    const Profile = ()=>{

        const [selectedOption, setSelectedOption] = useState('');

        const handleOptionClick = (option)=>{
            setSelectedOption(option);
        } 
     
        return (

            <div className="profile">

                <div className="profile-components">
                    {selectedOption === 'myProduct' && <Product/>}
                    {selectedOption === 'chat' && <Chat/>}
                    {selectedOption === 'addProduct' && <AddProduct />} 
                </div>

                <div className="user-option"> 
                    <ul>
                        <li onClick={()=>{handleOptionClick('myProduct')}}> My Products</li>
                        <li onClick={()=>{handleOptionClick('chat')}}>Chat</li>

                        <li onClick={()=>{handleOptionClick('addProduct')}}>Add Product</li>

                        <li>Edit Profile</li>
                        <li>Settings</li>
                        <li>
                            <img src="" alt="cool-img" />
                        </li>
                    </ul>
                </div>

            </div>
        )
    }

    export default Profile;