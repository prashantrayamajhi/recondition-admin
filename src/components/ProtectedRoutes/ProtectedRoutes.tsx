import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }: any) => {

  return (
    <Route {...rest} render={props => (
      localStorage.getItem('userId') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  )
}

const AdminRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('userId') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken') && localStorage.getItem('role') === 'admin'
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
  )
}


export { PrivateRoute, AdminRoute }