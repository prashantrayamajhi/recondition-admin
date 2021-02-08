import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute/PrivateRoute'

// componets
import Products from './Products/Products'
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
          <PrivateRoute path="/addProduct" exact component={AddProduct} />
          <PrivateRoute path="/users" exact component={Users} />
          <PrivateRoute path="/addUser" exact component={AddUser} />
          <PrivateRoute path="/model" exact component={Model} />
          <PrivateRoute path="/addModel" exact component={AddModel} />
        </Switch>
      </Router>
    </>
  )
}
