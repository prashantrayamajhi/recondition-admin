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
import Container from './../Container/Container'
import { Link } from 'react-router-dom'

export default function Model() {
  return (
    <>
      <Navbar />
      <Container>
        <div className='add-category'>
          <Link to='/addModel' className='link'><AddCircle color='primary' style={{ fontSize: 45 }} /></Link>
        </div>
        <TableContainer className='table' component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }} align='center'>S.N</TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align='center'>Model</TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>Honda</TableCell>
                <TableCell align='center' className='actions'><Link className='link' to=''><Button className='btn' variant='contained' size='small' style={{ backgroundColor:'lightseagreen' }}><Edit className='icon'/></Button></Link>
                  <Link className='link' to=''><Button className='btn' variant='contained' color='secondary' size='small'><Delete className='icon'/></Button></Link></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}
