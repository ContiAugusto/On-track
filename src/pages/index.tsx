import { useEffect, useState } from 'react'
//import axios from 'axios'

function Home() {
  const [homie] = useState('')
  useEffect(() => {
    try {
      //axios.get('/').then((resp) => setHomie(resp.data))
    } catch (err) {
      console.error(err)
    }
  }, [])

  return <>{homie}</>
}

export default Home
