import React from 'react'

const TarjetaCliente = ({ cliente }) => {

  const { nombre, empresa, email, telefono, notas } = cliente;

  return (
    <div className="bg-white mt-5 p-5 rounded-md w-1/2">
      <p className="font-bold text-slate-800">Nombre: <span className="font-normal">{nombre}</span></p>
      <p className="font-bold text-slate-800">Empresa: <span className="font-normal">{empresa}</span></p>
      <p className="font-bold text-slate-800">email: <span className="font-normal">{email}</span></p>
      <p className="font-bold text-slate-800">Teléfono: <span className="font-normal">{telefono}</span></p>
      <p className="font-bold text-slate-800">Notas: <span className="font-normal">{notas}</span></p>
    </div>
  )
}

export default TarjetaCliente
