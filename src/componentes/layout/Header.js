import React, { useState } from 'react'
import '../../Header.css'

export const Header = ({setLoggedIn, loggedIn}) => {

  const [ text, setText ]=useState('Log Out')


  const click = () =>{
    {loggedIn ? setLoggedIn(false): 
      setLoggedIn(true)}
    {text === 'Log Out' ?  setText('Log In') :
      setText('Log Out')
    }
  }

  return (
    <div className='Container'>
      <div  className='titleApp'>
        <h1> Restaurant's APP</h1>
      </div>


        <a href='#'  className='username' onClick={click}>
            <p> {text} </p>
        </a>
    </div>
  )
}
