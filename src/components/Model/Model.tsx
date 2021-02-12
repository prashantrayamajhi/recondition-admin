import { useState, useEffect } from 'react'
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
import ModalComponent from './../modal/Modal'
import './index.scss'
import Axios from './../api/server'

export default function Model() {
  const [modal, setModal] = useState<boolean>(false)
  const [models, setModels] = useState<any>([])
  const [id, setId] = useState<number>()

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  useEffect(() => {
    const fetchModels = async () => {
      try{
        const res = await Axios.get('/api/v1/admin/models', config)
        setModels(res.data.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchModels()
  }, [])

  const toggleModal = (id:number) => {
    setModal(prev => !prev)
    handleId(id)
  }

  const handleId = (id : number) => {
    setId(id)
  }

  let sn:number = 0
  const mappedData = models.slice(0).reverse().map((model:any) => {
    sn++
    return (
      <TableRow key={model._id}>
        <TableCell align='center'>{sn}</TableCell>
        <TableCell align='center'>{model.name}</TableCell>
        <TableCell align='center' className='actions'><Link className='link' to={`/addModel/update/${model._id}?isEdit=true`}><Button className='btn' variant='contained' size='small' style={{ backgroundColor: 'lightseagreen' }}><Edit className='icon' /></Button></Link>
          <Button className='btn' variant='contained' color='secondary' size='small' onClick={() => {toggleModal(model._id)}}><Delete className='icon' /></Button></TableCell>
      </TableRow>
    )
  })
  return (
    <>
      <ModalComponent title="Do you want to delete the Model ?" isOpen={modal} setOpen={setModal} link={`/api/v1/admin/models/${id}`} />
      <Navbar />
      <Container>
        <div className='add-model'>
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
              {mappedData}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}
