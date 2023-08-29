import React,{useState,useEffect} from "react"
import './Chat.css'
import "../../color.css";
import '../img/OIP.jpg'
import '../img/chat-icon.png'

const Chat = ()=>{
      
    const [conversation, setConversation] = useState([])
    const user = localStorage.getItem('user');

    useEffect(()=>{
        const getConversation = async()=>{
            try{
                const res = await fetch("http://localhost:5000/conversation/:"+user._id);
                const data = await res.json();
                setConversation(data);
            }catch(err){
                console.log(err);
            }
             
        };
        getConversation();
    },[user._id]);

    // console.log(user);
    return(
        <div className="chat-app">

            <section className="conversation">
                <h2>
                    Conversations
                </h2>

                {
                   console.log(conversation)
                }
                <div className="chat">
                        <img style={{height: "40px",width: "40px",borderRadius: "50%",border: "none",backgroundSize: "cover"}} src="OIP.jpg" />
                        <h4 style={{color:"var(--black-color)",fontWeight:"bold",padding: "10px"}}>Golu</h4>
                </div>
            </section>
            
            <section className="chat-section">

                <div className="chat-head">
                    {/* <img src="chat-icon.png" alt="chat-logo" style={{height: '50px',width: '50px',padding: '0 5px'}}/> */}
                    <h2 style={{marginTop: '10px',color: 'var(--blue-color)',fontWeight:"bold"}}>Chat</h2>
                </div>
                <div className="msg-area">
                    <div className="outgoing message">
                        <h4 style={{color: 'var(--dark-blue-color'}}>Tiny</h4>
                        <p style={{fontWeight: 'BOLD',color: 'var(--black-color'}}>How's the josh?</p>
                    </div>

                    <div className="incoming message">
                        <h4 style={{color: 'var(--blue-color'}}>Golu</h4>
                        <p style={{color: 'var(--white-color)', fontWeight: 'bold'}}>High! Sir.</p>
                    </div>
                </div>

                <div>
                    <textarea id="textarea" placeholder="Write a message..." cols="30" rows="1"></textarea>
                </div>
            </section>
        </div>
    )
}

export default Chat;