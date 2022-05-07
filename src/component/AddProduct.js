import React,{useState} from 'react'
import HeaderController from "./HeaderController"
import axios from 'axios'
function AddProduct(){
    const [name,setName]=useState('')
    const [description,setDesc]=useState('')
    const [file,setFile]=useState('')
    const [price,setPrice]=useState('')
    
    const addProd=(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", name);
        console.log(formData.get('name'))
       
        formData.append('description',description)
        formData.append('file',file)
        formData.append('price',price)
        axios.post('http://localhost/lr/public/index.php/api/addProduct',formData)
        .then(res=>{
            console.log(res)
        })

        
    }
    return (
        <div>
            <HeaderController/>
            <h1>AddProduct</h1>
            <div className='col-md-6 offset-sm-2'>
                <input type='text' className='form-control' placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input type='text' className='form-control' placeholder='Description' value={description} onChange={(e)=>setDesc(e.target.value)}/><br/>
                <input type='file' className='form-control'   onChange={(e)=>setFile(e.target.files[0])}/><br/>
                <input type='text' placeholder='price' className='form-control'  value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <button className='btn btn-primary' onClick={addProd}>Submit</button>
            </div>
          
        </div>
    )
}

export default AddProduct