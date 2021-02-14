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
import { useState, useEffect } from 'react'
import ModalComponent from './../modal/Modal'
import Axios from './../api/server'

export default function Users() {
  const [modal, setModal] = useState<boolean>(false)
  const [users, setUser] = useState<any>([])
  const [id, setId] = useState<number>()

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await Axios.get('/api/v1/admin/users', config)
        setUser(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUsers()
  }, [])

  const toggleModal = (id: number) => {
    setModal(prev => !prev)
    handleId(id)
  }

  const handleId = (id: number) => {
    setId(id)
  }

  let sn: number = 0
  const mappedData = users.map((user: any) => {
    sn++
    return (
      <TableRow key={user._id}>
        <TableCell align='center'>{sn}</TableCell>
        <TableCell align='center'>{user.name}</TableCell>
        <TableCell align='center'>{user.email}</TableCell>
        <TableCell align='center'>{user.phone}</TableCell>
        <TableCell align='center'>{user.address}</TableCell>
        <TableCell align='center'>{user.role}</TableCell>
        <TableCell align='center' className='actions'><Link className='link' to={`/admin/     addUser/update/${user._id}`}><Button className='btn' variant='contained' size='small' style={{ backgroundColor: 'lightseagreen' }}><Edit className='icon' /></Button></Link>
          <Button className='btn' variant='contained' color='secondary' size='small' onClick={() => { toggleModal(user._id) }}><Delete className='icon' /></Button></TableCell>
      </TableRow>
    )
  })

  return (
    <>
      <ModalComponent title="Do you want to delete the User ?" isOpen={modal} setOpen={setModal} link={`/api/v1/admin/users/${id}`}/>
      <Navbar />
      <div className='add-user'>
        <Link to='/admin/addUser' className='link'><AddCircle color='primary' style={{ fontSize: 45 }} /></Link>
      </div>
      <TableContainer className='table' component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>S.N</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>Email</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>Phone</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>Address</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>Role</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mappedData }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
