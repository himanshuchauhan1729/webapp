import './App.css';
import Nav from "./components/Nav/Nav"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"


import Products from "./components/Products/Products"
import Profile from "./components/Profile/Profile"  
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PrivateComponent from './components/PrivateComponent';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    
      <Routes>
        <Route element = {<PrivateComponent />}>

        <Route path="/" element = {<Products />} /> 
        <Route path="/profile" element = {<Profile />} />

        </Route>

        <Route path="/login" element = {<Login />}/>

        <Route path="/signup" element = {<Signup />}/>

      </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}
export default App;
