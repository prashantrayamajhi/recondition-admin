import { Route, Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken'
//TODO remove any

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const token: string = localStorage.getItem('accessToken')!
  if (localStorage.getItem('accessToken') && localStorage.getItem('isAuthenticated')
    && localStorage.getItem('role') && localStorage.getItem('userId')
  ) {
    jwt.verify(token, 'waschghh@rerfhs#fhfhf^vhs&*987rt1m8iu', function (err:any, decode:any) {
      if (err) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('role')
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('userId')
      }
    })
  }

  return (
    <Route {...rest} render={props => (
      localStorage.getItem('userId') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/admin/login', state: { from: props.location } }} />
    )} />
  )
}

const AdminRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('userId') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken') && localStorage.getItem('role') === 'admin'
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/admin/', state: { from: props.location } }} />
    )} />
  )
}


export { PrivateRoute, AdminRoute }
