import { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { AddCircle, Delete, Edit } from '@material-ui/icons'
import Navbar from '../Navbar/Navbar'
import Container from '../../Container/Container'
import { Link } from 'react-router-dom'
import ModalComponent from '../../client/modal/Modal'
import './Modal.scss'
import Axios from '../../../api/server'
import ModelEntity from '../../../entity/ModelEntity'

export default function Model() {
  const [modal, setModal] = useState<boolean>(false)
  const [models, setModels] = useState<ModelEntity[]>([])
  const [id, setId] = useState<string>()

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await Axios.get('/api/v1/admin/models', config)
        setModels(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchModels().then(() => {
    })
  }, [])

  const toggleModal = (id: string) => {
    setModal(prev => !prev)
    handleId(id)
  }

  const handleId = (id: string) => {
    setId(id)
  }

  let sn: number = 0
  const mappedData = models.slice(0).reverse().map((model: ModelEntity) => {
    sn++
    return (
      <TableRow key={model._id}>
        <TableCell align='center'>{sn}</TableCell>
        <TableCell align='center'>{model.name}</TableCell>
        <TableCell align='center' className='actions'><Link className='link'
          to={`/admin/addModel/update/${model._id}?isEdit=true`}><Button
            className='btn' variant='contained' size='small' style={{ backgroundColor: 'lightseagreen' }}><Edit
              className='icon' /></Button></Link>
        <Button className='btn' variant='contained' color='secondary' size='small' onClick={() => {
          toggleModal(model._id)
        }}><Delete className='icon' /></Button></TableCell>
      </TableRow>
    )
  })
  return (
    <>
      <ModalComponent title='Do you want to delete the Model ?' isOpen={modal} setOpen={setModal}
        link={`/api/v1/admin/models/${id}`} />
      <Navbar />
      <Container>
        <div className='add-model'>
          <Link to='/admin/addModel' className='link'><AddCircle color='primary' style={{ fontSize: 45 }} /></Link>
        </div>
        <TableContainer className='table' component={Paper}>
          <Table aria-label='simple table'>
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
