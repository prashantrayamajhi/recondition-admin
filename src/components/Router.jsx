import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute, AdminRoute } from './ProtectedRoutes/ProtectedRoutes'

// componets
import Home from './Home/Home'
import Products from './Products/Products'
import Product from './Products/Product'
import AddProduct from './Products/AddProduct'
import Users from './Users/Users'
import AddUser from './Users/AddUser'
import Login from './Login/Login'
import Model from './Model/Model'
import AddModel from './Model/AddModel'

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/login" exact component={Login} />
          <PrivateRoute path="/admin/" exact component={Products} />
          <PrivateRoute path="/product/:id" exact component={Product} />
          <PrivateRoute path="/admin/addProduct" exact component={AddProduct} />
          <PrivateRoute path="/admin/addProduct/update/:id" exact component={AddProduct} />
          <AdminRoute path="/admin/users" exact component={Users} />
          <AdminRoute path="/admin/addUser" exact component={AddUser} />
          <AdminRoute path="/admin/addUser/update/:id" exact component={AddUser} />
          <PrivateRoute path="/admin/model" exact component={Model} />
          <PrivateRoute path="/admin/addModel" exact component={AddModel} />
          <PrivateRoute path="/admin/addModel/update/:id" exact component={AddModel} />
        </Switch>
      </Router>
    </>
  )
}


