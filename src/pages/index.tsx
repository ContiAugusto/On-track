//import axios from 'axios'

import { Login } from '../components/functions/auth'
import Estoque from './estoque'

function Home() {
  return (
    <>
      <Estoque />
      <Login />
    </>
  )
}

export default Home
