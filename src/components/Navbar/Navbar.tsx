import './index.scss'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, useHistory } from 'react-router-dom'


export default function Navbar() {

  const history = useHistory()

  const onLogout =() => {
    localStorage.removeItem('userId')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('role')
    history.push('/admin/login')
  }
  // state for responsive navbar
  const [isResponsive, setIsResponsive] = useState(false)
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    menu:{
      color: 'black'
    }
  }))
  const classes = useStyles()
  const toggleResponsive = () => {
    setIsResponsive(!isResponsive)
  }

  const isAdmin = () => {
    if(localStorage.getItem('role') === 'admin'){
      return <Link to="/admin/users" className='link' onClick={() => { setIsResponsive(false) }}><Button className='link-btn' >Users</Button></Link>
    }
  }
  return (
    <AppBar position='static'>
      <Toolbar className='navbar'>
        <Typography variant="h6" className={ classes.title }>
          Admin Panel
        </Typography>
        <div className={ `link-wrapper ${ isResponsive ? 'responsive' : '' }` }>
          <Link to="/admin/" className='link' onClick={() => { setIsResponsive(false) }}><Button className='link-btn'>Products</Button></Link>
          <Link to="/admin/model" className='link' onClick={() => { setIsResponsive(false) }}><Button className='link-btn' >Model</Button></Link>
          {isAdmin()}
          <span className='link' onClick={() => { setIsResponsive(false) }}><Button className='link-btn' color="inherit" onClick={onLogout}>Logout</Button></span>
        </div>
        <IconButton edge="start" className='menu' aria-label="menu" onClick={() => { toggleResponsive() }}>
          <MenuIcon style={{ color : isResponsive ? 'black' : 'white' }}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
