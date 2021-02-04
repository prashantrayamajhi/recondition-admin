import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

// componets
import Products from './Products/Products'
import AddProduct from './Products/AddProduct'
import Users from './Users/Users'
import AddUser from './Users/AddUser'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/users' exact component={Users} />
        <Route path='/products' exact component={Products} />
        <Route path='/addProduct' exact component={AddProduct} />
        <Route path='/addUser' exact component={AddUser} />
      </Switch>
    </Router>
  )
}

export default App
