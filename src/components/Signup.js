
import React, {useEffect,useState} from 'react';
import instalogo from "../components/images/instalogo.jfif" ;
import "./Signup.css";
import { json, Link,useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';

export default function Signup() {

const navigate = useNavigate()

const [name, setName] = useState(" ");                  //usestate variables
const [email, setEmail] = useState("");
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

// Toast functions

const notifyA =(msg)=>toast.error(msg)
const notifyB =(msg)=>toast.success(msg)

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ ;

const postData=()=>{
  console.log({
    name,email,userName,password

  })
  // checking email
  if(!emailRegex.test(email)){
    notifyA("Invalid email")
    return
  }else if(!passRegex.test(password)){
    notifyA("Password must contain atlest 8characters, including atleast one number and includes both upper and lower case letters and special characters eg-# @ ? %")
  }
 

  // sending data  to server
  fetch("http://localhost:5000/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      userName:userName,
      email:email,
      password:password
      })

  }).then(res=>res.json())
    .then(data =>{
      if(data.error){
        notifyA(data.error)

      }else{
        notifyB(data.message)
        navigate("/signin")
      }
    
    console.log(data)})
}
  return (
    <div className='signup'>
        <div className='form-container'>
            <div className='form'>
            <img className='signuplogo' src={instalogo} alt='logo'   />

<p className='loginpara'> 
  Signup to see photos and videos <br/>  from your friends
</p>

<div>
<input type="email" name='email' id='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
</div>
<div>
<input type="text" name="name" id="name" placeholder="FullName" onChange={(e)=>{setName(e.target.value)}}/>
</div>
<div>
<input type="text" name='username' id='username' value={userName} placeholder='Username' onChange={((e)=>
  {setUserName(e.target.value)})}/>
</div>
<div>
<input type="password" name='password' value={password} id='password' placeholder='Password' onChange={((e)=>
  {setPassword(e.target.value)})}/>
</div>


<p className='loginpara' style={{fontSize:"12px",margin:"3px 0px"}}>
  By signing up, you agree to out Terms,<br/>privacy policy and cookies policy.

</p>
<input type="submit" id='submit-btn' value="Sign Up" onClick={()=>{postData()}} />

            </div>

            <div className='form2'>
                Already have an account ?
                <Link to="/Signin">
                    <span style={{color:"blue",cursor:"pointer"}}>
                        SignIn

                    </span>

                </Link>

            </div>


        </div>
    </div> 
  )
}
