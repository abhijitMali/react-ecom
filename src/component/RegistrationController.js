import React,{useState} from 'react'
import HeaderController from './HeaderController'
import {useNavigate} from 'react-router-dom'


function RegistrationController(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    async function signup(){
        let item={name,email,password}
        let result=await fetch('http://localhost/lr/public/index.php/api/register',{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(item)
        })

        result=await result.json();
        //localStorage.setItem('userInfo',JSON.stringify(result))
        //console.warn(result);
        navigate('/add-product')
    }
    return (
        <div>
        <HeaderController/>
        <div className=' col-sm-6  offset-sm-3'>
            
       <h2>User Signup</h2>
       <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/> 
       <br/>
       <input type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/> 
       <br/>
       <input type='text' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/> 
       <br/>
       <button onClick={signup} className='btn btn-primary'>Sign up</button>
        </div>
        </div>
    )
}

export default RegistrationController