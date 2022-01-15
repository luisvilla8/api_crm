import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const params = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  
  const consultarClienteAPI = async () => {
    try {
      const id = params.id;
      const url = `http://localhost:4000/clientes/${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      setCliente( resultado );
    } catch (error) {
      console.log(error)
    }
    setCargando(false);
  };

  useEffect(() => {
    consultarClienteAPI();
  }, []);

  return (
    <div>
      {cliente?.nombre ?
        <>
          <h1 className="font-black text-indigo-800 text-5xl">Editar Cliente</h1>
          <p className="font-normal text-gray-700 mt-5">Edita los campos para actualizar el cliente</p>
    
          <Formulario 
            cliente={cliente} 
            cargando={cargando}
          />
        </>
      :
        <h1 className="font-black text-indigo-800 text-3xl">Cliente no encontrado ...</h1>        
      }
      
      
    </div>
  )
}

export default EditarCliente
