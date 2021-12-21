import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getRiders() {
    return apiClient.get('/riders')
  },
  getEvent(id) {
    return apiClient.get('/riders/' + id)
  },
  postEvent(rider) { 
    return apiClient.post('/riders', rider)
  }
}