//import React from 'react'
import { useState } from 'react'
import { login } from '../components/functions/login'
import { Textbox } from '../components/ui/text'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Login</h1>

      <Textbox
        divclassname="login"
        placeholder="Enter your username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textbox
        divclassname="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => login(email, password)}> Login </button>
    </div>
  )
}

export default Login
