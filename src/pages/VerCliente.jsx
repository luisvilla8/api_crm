import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';
import TarjetaCliente from '../components/TarjetaCliente';
import '../styles/Spinner.css'

const VerCliente = () => {

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
      console.log( error );
    }
    setCargando(false);
  };

  useEffect(() => {
    consultarClienteAPI();
  }, []);

  return (
    <div>
      { cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? (
        <>
          <h1 className="font-black text-indigo-800 text-4xl">
            Cliente no encontrado...
          </h1>
        </>
      ) : (
        <> 
          <h1 className="font-black text-indigo-800 text-5xl">
            Bienvenido(a) <span>{cliente.nombre}</span>
          </h1>
          <p className="font-normal text-gray-700 mt-5">
            Información del cliente:
          </p>
          <TarjetaCliente cliente={cliente} />
        </>
      )}
    </div>
  );
}

export default VerCliente
