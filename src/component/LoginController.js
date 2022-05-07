import React,{useState} from 'react'
import HeaderController  from "./HeaderController"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function LoginController(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const item={email,password}
    const navigate=useNavigate()
    const login=()=>{
        axios.post('http://localhost/lr/public/index.php/api/login',item)
        .then(res=>{
            localStorage.setItem('userInfo',JSON.stringify(res.data))
            navigate('/add-product')
        })
    }
    return (
        <div>
            <HeaderController/>

            <div className='col-sm-6 offset-sm-2'>
            <h1>Login</h1>
            <input type='text' placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)} className='form-control'/><br/>
            <input type='password' placeholder='Enter Password' value={password} onChange={e=>setPassword(e.target.value)} className='form-control'/><br/>
            <button  className='btn btn-primary' onClick={login}>Login</button>
            
            </div>
        </div>
    )
}

export default LoginController