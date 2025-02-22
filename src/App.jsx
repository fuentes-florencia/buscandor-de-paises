import { useState } from 'react'
import './App.css'
import { Busqueda } from './Componentes/Busqueda'
import { MostrarResultado } from './Componentes/MostrarResultado'
import { Historial } from './Componentes/Historial'

function App() {
  const [resultado, setResultado] = useState([])
  const [error, setError] = useState (false)

  return (
    <>
      <Busqueda  setResultado={setResultado} setError={setError}/>
      <MostrarResultado resultado={resultado} error={error}/>
      <Historial resultado={resultado} />
    </>
  )
}

export default App
