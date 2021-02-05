import './index.scss'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Edit, Delete, AddCircle } from '@material-ui/icons'
import Navbar from './../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <>
      <Navbar />
      <div className='add-user'>
        <Link to='/addUser' className='link'><AddCircle color='primary' style={{ fontSize: 45 }} /></Link>
      </div>
      <TableContainer className='table' component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>S.N</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Phone</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Address</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Role</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Prashant Rayamajhi</TableCell>
              <TableCell>prashantrayamajhi85@gmail.com</TableCell>
              <TableCell>9840168144</TableCell>
              <TableCell>Thankot / Checkpost</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell align='center' className='actions'><Link className='link' to=''><Button className='btn' variant='contained' size='small' style={{ backgroundColor:'lightseagreen' }}><Edit className='icon'/></Button></Link>
                <Link className='link' to=''><Button className='btn' variant='contained' color='secondary' size='small'><Delete className='icon'/></Button></Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>johndoe@gmail.com</TableCell>
              <TableCell>9876543211</TableCell>
              <TableCell>Kalimati</TableCell>
              <TableCell>Staff</TableCell>
              <TableCell align='center' className='actions'><Link className='link' to=''><Button className='btn' variant='contained' size='small' style={{ backgroundColor:'lightseagreen' }}><Edit className='icon'/></Button></Link>
                <Link className='link' to=''><Button className='btn' variant='contained' color='secondary' size='small'><Delete className='icon'/></Button></Link></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
