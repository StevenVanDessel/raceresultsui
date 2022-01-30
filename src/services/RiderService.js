import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getRiders() {
    return apiClient.get('/riders');
  },
  getRider(id) {
    return apiClient.get('/riders/' + id)
  },
  postRider(rider) { 
    return apiClient.post('/riders', rider)
  },
  getRidersByNameContaining(text) {
    return apiClient.get('/riders/byNameContaining?text=' + text)
  }
}