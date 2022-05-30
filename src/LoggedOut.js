import React, { useState } from 'react'
import './App.css';
import SignUp from './SignUp';

const LoggedOut = () => {
    const [ form, setForm ] = useState(false)

    const openForm = ()=>{
        setForm(true)
    }
  return (
    <div className='App-header2'>
        {form ? 
            <SignUp 
                form={form}
                setForm={setForm}
            />
        :         
        <div className='Info'>
            <div className='contSmall'>
                <h1> Find the nearest restaurant! </h1>
                <p>Do you have an account?</p>
                <p>Log in the top right button</p>

                <a href='#'  className='signUp' onClick={openForm}>
                        
                    <div className='textSignUp'>
                        <p>Sign Up</p>
                    </div>
                </a>

                <p>If you don't have one, create one here!</p>

            </div> 
        </div>
        }
    </div>
  )
}

export default LoggedOut