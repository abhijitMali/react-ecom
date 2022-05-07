import React,{useEffect}    from 'react'
import {useNavigate} from 'react-router-dom'

function ProtectedRoute(props){
    const navigate=useNavigate();
    let Cmp=props.cmp
    useEffect(()=>{
        if(localStorage.getItem('userInfo')==null){
           return navigate('/login')
        }
        
        
    },[Cmp])
    return(
        <div>
            <Cmp/>
        </div>
    )
}

export default ProtectedRoute