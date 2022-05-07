import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link,useNavigate } from "react-router-dom";

function HeaderController(){

    const navigate=useNavigate()
    const logout=()=>{
      localStorage.clear();
      navigate('/register')
    }

    return (
        <>
         <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto nav-class">
    <Link to="/">Home</Link>
    {
    (localStorage.getItem('userInfo')==null) ? <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link></> : <>
      <Link to="/add-product">Add Product</Link>
      <Link to="/update-product">update Product</Link>
      <Link to="/product-list"> Product List</Link></> 
    }
      </Nav>
      {(localStorage.getItem('userInfo')) ? <>
      <Nav>
        <NavDropdown title='User Name'>
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav></>
      : null
      }
    </Container>
  </Navbar>
  
        </>
    )
}

export default HeaderController