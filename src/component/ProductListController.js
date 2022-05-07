import React,{useEffect,useState} from 'react'
import HeaderController from './HeaderController'
import {Table} from 'react-bootstrap'
import axios from 'axios'
function ProductListController() {

    const [product,setProduct]=useState([]);
    const fetchdata=async ()=>{
  
    }
    useEffect(  ()=>{
        async function check() {
        let result1=await axios.post('http://localhost/lr/public/index.php/api/product-list',)
        
        setProduct(result1.data)
        }
        check()
    },[])
    console.log(product)
    return (
        <div>
            <HeaderController />
            <div className='col-md-6 offset-md-2'>
            <h1>Product List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>      
                        <th>Price</th>      
                    </tr>
                </thead>
              <tbody>
              { 
              (product) ?  
              product.map((p)=>{
                  
                  return(<><tr>
                    <td key={p.id}>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.description}</td>
                    <td><img style={{width: "50px",height:"50px"}} src={'http://localhost/lr/storage/app/' + p.file_path}/></td>
                    <td>{p.price}</td>
                </tr></>)
                     
                }) : 'adkjk' 
              
             }
                    
                </tbody>
                
            </Table>
            </div>
        </div>
    )
}

export default ProductListController