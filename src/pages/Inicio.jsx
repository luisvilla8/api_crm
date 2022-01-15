import React, { useEffect, useState } from 'react'
import Cliente from '../components/Cliente';

const Inicio = () => {
  
  const [clientes, setClientes] = useState([]);

  const consultarClientesAPI = async () => {
    const url = "http://localhost:4000/clientes";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    setClientes(resultado);
  };  

  const handleEliminar = async id => {
    try {
      const url = `http://localhost:4000/clientes/${id}`;
      const respuesta = await fetch(url,{
        method:'DELETE'
      });
      await respuesta.json();

      const clientesActualizado = clientes.filter(cliente => cliente.id !== id);
      setClientes(clientesActualizado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    consultarClientesAPI();
  },[]);

  return (
    <>
      <h1 className="font-black text-indigo-800 text-5xl">Clientes</h1>
      <p className="font-normal text-gray-700 mt-5">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map( cliente => (
              <Cliente 
                key={cliente.id}
                cliente={cliente}
                handleEliminar={handleEliminar}
              />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Inicio
