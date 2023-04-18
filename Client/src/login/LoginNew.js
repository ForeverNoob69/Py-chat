import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import AuthContext from '../context/Context';
import ClipLoader from 'react-spinners/ClipLoader'
import './New-login.css'

export default function LoginNew() {


    let {loginUser,userName,authTokens,signupUser,loading,setLoading,setSwipe,swipe} = useContext(AuthContext);
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    

    let navigate = useNavigate();
    
  
    if(userName){
          navigate('/chat');
    }

    const switchBTN = ()=>{
        setSwipe(!swipe)
        setName('')
        setPassword('')
    }


  return (
    <section className='container'>
        {/* main  */}
        <main className={swipe ? `slide_right` : undefined}>

              {/* login block  */}

                <section className="form-block" style={{display:swipe ? `none` : `flex`}}>
                    <form action="" onSubmit={name && password ? loginUser: (e)=> e.preventDefault()} className='login_form' >
                        <h2>Log In to your account</h2>
                        <input type="text" name="username" onChange={(e)=>setName(e.target.value)} placeholder='Username' />
                        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                        {loading ? <ClipLoader color="#00a884" size={18}/> : 
                        <button type='submit' className='login_btn'>Login</button>

                    }
                    </form>
                </section>

                {/* signin block  */}

                <section className="form-block" style={{display: swipe ? `flex` : `none`}}>
                    <form action="" onSubmit={name && password ? signupUser : (e)=>e.preventDefault()} className='signup_form'>
                        <h2>Create a New Account</h2>
                        <input type="text" name="username" onChange={(e)=>setName(e.target.value)} placeholder='Username' id="username" />
                        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' id="password" />
                        {loading ? <div style={{display:'flex',justifyContent:'center'}}><ClipLoader color="#36d7b7"  size={25}/></div> : 
                        <button type='submit' className='signup_btn'>Signup</button>
                        }
                    </form>
                </section>

            

        </main>

        {/* aside  */}
        <aside className={swipe ? `slide_left` : undefined}>

            {/* signup block  */}
            <section className='login-block' style={{display:swipe ? `none` : `flex`}}>
                <h2>
                New User?
                </h2>
                <button type='submit'  onClick={switchBTN}>Signup</button>
            </section>

            {/* login block  */}
            <section className='signup-block' style={{display:swipe ? `flex` : `none`}}>
                <h2>
                Already a User?
                </h2>
                <button type='submit'  onClick={switchBTN}>Login</button>
            </section>
        </aside>

    </section>
  )
}
