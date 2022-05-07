import React from 'react'
import LoginController from './component/LoginController'

import {BrowserRouter,Route, Routes} from 'react-router-dom';
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct';
import RegistrationController from './component/RegistrationController';
import  './App.css';
import ProtectedRoute from './component/ProtectedRoute';
import ProductList from './component/ProductListController'
function App() {
  return (

      <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/login' element={ <LoginController/>} />
      <Route path='/register' element={<ProtectedRoute cmp={RegistrationController}/>}/>

      <Route path='/add-product' element={<ProtectedRoute cmp={AddProduct}/>}/>
      <Route path='/update-product' element={<ProtectedRoute cmp={UpdateProduct} />}/>
       <Route path='/product-list' element={<ProtectedRoute cmp={ProductList}/>}/>
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
