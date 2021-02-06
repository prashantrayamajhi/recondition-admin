import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }: any) {
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('userId') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  )
}
