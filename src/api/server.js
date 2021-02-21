import axios from 'axios'

// const BASE_URL = process.env.REACT_APP_NODE_ENV ? 'http://localhost:8080' : 'https://infinite-caverns-40807.herokuapp.com/'
const BASE_URL = 'http://localhost:8080'

export default axios.create({
  baseURL: BASE_URL
})
