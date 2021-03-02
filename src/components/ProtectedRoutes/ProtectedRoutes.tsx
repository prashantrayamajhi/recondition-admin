import { Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
//TODO remove any
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const token: string = localStorage.getItem('accessToken')!
  if(token){
    const decoded : any= jwt_decode(token)
    const current_time = new Date().getTime() / 1000
    if (current_time > decoded.exp) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('role')
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('userId')
    }
  }
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('userId') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken') && localStorage.getItem('role')
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
