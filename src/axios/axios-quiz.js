import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-201f0.firebaseio.com/'
})