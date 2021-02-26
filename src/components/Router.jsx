import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute, AdminRoute } from './ProtectedRoutes/ProtectedRoutes'

import Home from './Home/Home'
import Products from './Products/Products'
import HomeProducts from './Products/Buyers/Products'
import Product from './Products/Buyers/Product'
import AdminProduct from './Products/Product'
import AddProduct from './Products/AddProduct'
import Users from './Users/Users'
import AddUser from './Users/AddUser'
import Login from './Login/Login'

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={HomeProducts} />
          <Route path="/product/:id" exact component={Product} />
          <PrivateRoute path="/admin/product/:id" exact component={AdminProduct} />
          <Route path="/admin/login" exact component={Login} />
          <PrivateRoute path="/admin/" exact component={Products} />
          <PrivateRoute path="/admin/addProduct" exact component={AddProduct} />
          <PrivateRoute path="/admin/addProduct/update/:id" exact component={AddProduct} />
          <AdminRoute path="/admin/users" exact component={Users} />
          <AdminRoute path="/admin/addUser" exact component={AddUser} />
          <AdminRoute path="/admin/addUser/update/:id" exact component={AddUser} />
        </Switch>
      </Router>
    </>
  )
}


