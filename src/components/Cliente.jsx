import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente, handleEliminar }) => {

  const navigate = useNavigate();

  const {nombre, email, telefono, empresa, id} = cliente;

  return (
    <tr className="border-b-2 hover:bg-slate-100 transition-all">
      <td className="p-3 text-center">{nombre}</td>
      <td className="p-3">
        <p><span className="font-bold text-slate-800">EMAIL: </span>{telefono}</p>
        <p><span className="font-bold text-slate-800">TEL: </span>{email}</p>
      </td>
      <td className="p-3 text-center">{empresa}</td>
      <td className="p-3 flex flex-col gap-y-2">
        <button 
          className="bg-green-600 p-1 rounded-md"
          onClick={ () => navigate(`/clientes/${id}`)}
        >Ver</button>
        <button 
          className="bg-yellow-500 p-1 rounded-md"
          onClick={ () => navigate(`/clientes/editar/${id}`)}
        >Editar</button>
        <button 
          className="bg-red-600 p-1 rounded-md"
          onClick={ () => handleEliminar(id) }
        >Eliminar</button>
      </td>
    </tr>
  )
}

export default Cliente
