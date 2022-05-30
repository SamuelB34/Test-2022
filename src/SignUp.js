import React, { useState } from 'react'
import './App.css';
import { initializeApp } from "firebase/app";

const SignUp = ({form, setForm}) => {
  const volver = ()=>{
    setForm(false)
  }

  const [ name, setName ]= useState('')
  const [ last, setLast ]= useState('')
  const [ email, setEmail ]= useState('')
  const [ password, setPassword ]= useState('')
  const [ confirm, setConfirm ]= useState('')
  const [ data, setData ]=useState([])

  var usersRegistred = []




  const functionX=()=>{
    var nameData = document.getElementById('name').value;
    var lastNameData = document.getElementById('lastname').value;
    var emailData = document.getElementById('email').value;
    var passwordData = document.getElementById('password').value;
    var confirmData = document.getElementById('confirm').value;
    // console.log(nameData)
    setName(nameData)
    setLast(lastNameData)
    setEmail(emailData)
    setPassword(passwordData)
    setConfirm(confirmData)

    addNewUser(nameData,lastNameData,emailData,passwordData)
  }

  function addNewUser(name, last, email, password){
    var data = {
      name: name,
      last:last,
      email: email,
      password:password
    }
    usersRegistred.push(data)
    setData(usersRegistred)
    console.log(usersRegistred)
    setForm(false)
  }
  const signedUp = data.slice();
  signedUp.push(data)
  console.log(signedUp)





  return (
    <div className='contForm'>
        <h1> Sign Up</h1>
        <div className='contFormulary'>
          <p >Name</p>
          <input type="text" className='input' id='name' name="name" required
          minlength="2" maxlength="20" placeholder='Introduce your Name' />
          

          <p>Lastname</p>
          <input type="text" className='input' id='lastname' name="lastname" required
          minlength="2" maxlength="25" placeholder='Introduce your Lastname'/>

          <p>Email</p>
          <input type="email" className='input' id='email' name="email" required
          minlength="4" maxlength="50" placeholder='Introduce your Email'/>

          <p>Password</p>
          <input type="password" className='input' id='password' name="password" required
          minlength="4" maxlength="8" placeholder='Introduce a Password'/>

          <p>Confirm password</p>
          <input type="password" className='input' id='confirm'name="confirm" required
          minlength="8" maxlength="8" placeholder='Introduce a Password'/>

          <a href='#'  onClick={volver} className='signUp'>Back</a>

          <a href='#'  onClick={functionX} className='signUp'>Sign Up!</a>
        </div>
    </div>
    
  )

}




export default SignUp