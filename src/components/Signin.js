import React,{useState}from 'react';
import "./Signin.css";
import insta from "../components/images/insta.png" ;
import { Link,useNavigate } from 'react-router-dom';

import {toast} from 'react-toastify';


export default function Signin() {

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


// Toast functions

const notifyA =(msg)=>toast.error(msg)
const notifyB =(msg)=>toast.success(msg)

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

  const postData=()=>{
    console.log({
      email,password
  
    })
    // checking email
    if(!emailRegex.test(email)){
      notifyA("Invalid email")
      return
    }
   
  
    // sending data  to server
    fetch("http://localhost:5000/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        
        email:email,
        password:password
        })
  
    }).then(res=>res.json())
      .then(data =>{
        if(data.error){
          notifyA(data.error)
  
        }else{
          notifyB(data.message)
          navigate("/")
        }
      
      console.log(data)})
  }




  return (
    <div className='signin'>
      <div className='loginform'>
        <img src={insta} alt="logo image"/>

        <div>
        <input type="email" name='email' id='email' value={email} placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>

 
        </div>

        <div>
        <input type="password" name='password' value={password} id='password' placeholder='Password' onChange={((e)=>
        {setPassword(e.target.value)})}/>
        </div>
        <input type="submit" id='login-btn' onClick={()=>{postData()}} value="Sign In"/>
        <div>

        </div>

        <div className='loginform2'>
          Don't have an account ?
          <Link to="/Signup">
          <span style={{color:"blue",cursor:"pointer"}}>Sign Up </span>
          </Link>
        </div>
         
      </div>
     
    </div>
  )
}
