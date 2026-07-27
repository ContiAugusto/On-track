import { useLocation } from 'react-router-dom'

function Callback() {
  const params = new URLSearchParams(useLocation().search)
  const code = params.get('error')

  //Venham aqui manos do frontEnd
  return (
    <>
      <p>{code ? code : 'Login bem sucedido, pode fechar esta aba.'}</p>
    </>
  )
}

export default Callback
