import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://ec2-13-48-28-156.eu-north-1.compute.amazonaws.com/api',
  timeout: 1000
});