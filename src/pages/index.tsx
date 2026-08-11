//import axios from 'axios'

import { Login } from '../components/functions/auth'
import Estoque from './estoque'
import Montagem from './montagens'

function Home() {
  return (
    <>
      <Montagem />
      <Estoque />
      <Login />
    </>
  )
}

export default Home
