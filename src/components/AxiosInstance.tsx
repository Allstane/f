import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:8083',
  timeout: 10000000
});