import { useState } from 'react'
import './App.css'
import { Busqueda } from './Componentes/Busqueda'
import { MostrarResultado } from './Componentes/MostrarResultado'

function App() {
  const [resultado, setResultado] = useState([])

  return (
    <>
      <Busqueda  setResultado={setResultado} />
      <MostrarResultado resultado={resultado}/>
    </>
  )
}

export default App
