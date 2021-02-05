import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

// componets
import Products from './Products/Products'
import AddProduct from './Products/AddProduct'
import Users from './Users/Users'
import AddUser from './Users/AddUser'
import Login from './Login/Login'
import Category from './Category/Category'
import AddCategory from './Category/AddCategory'
import Model from './Model/Model'
import AddModel from './Model/AddModel'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Products} />
        <Route path='/addProduct' exact component={AddProduct} />
        <Route path='/users' exact component={Users} />
        <Route path='/addUser' exact component={AddUser} />
        <Route path='/login' exact component={Login} />
        <Route path='/category' exact component={Category} />
        <Route path='/addCategory' exact component={AddCategory} />
        <Route path='/model' exact component={Model} />
        <Route path='/addModel' exact component={AddModel}/>
      </Switch>
    </Router>
  )
}

export default App
