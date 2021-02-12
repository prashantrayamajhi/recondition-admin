import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute, AdminRoute } from './ProtectedRoutes/ProtectedRoutes'

// componets
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
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Products} />
          <PrivateRoute path="/product/:id" exact component={Product} />
          <PrivateRoute path="/addProduct" exact component={AddProduct} />
          <PrivateRoute path="/addProduct/:id" exact component={AddProduct} />
          <AdminRoute path="/users" exact component={Users} />
          <AdminRoute path="/addUser" exact component={AddUser} />
          <AdminRoute path="/addUser/update/:id" exact component={AddUser} />
          <PrivateRoute path="/model" exact component={Model} />
          <PrivateRoute path="/addModel" exact component={AddModel} />
          <PrivateRoute path="/addModel/update/:id" exact component={AddModel} />
        </Switch>
      </Router>
    </>
  )
}


