import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-indigo-800 text-5xl">Nuevo Cliente</h1>
      <p className="font-normal text-gray-700 mt-5">Llena los siguientes campos para registrar un cliente</p>
      <Formulario />
    </>
  )
}

export default NuevoCliente
