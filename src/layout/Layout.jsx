import React, { useEffect, useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();

  return (
    <div className="bg-slate-200 md:flex min-h-screen">
      <div className="bg-indigo-800 md:w-1/3 py-10">
        <Link 
          className="block font-black mx-5 text-center text-slate-50 text-3xl"
          to="/clientes"
        >CRM - CLIENTES</Link>
        <nav className="ml-24 mt-10">
          <Link 
            className={`${location.pathname === "/clientes" ? 'text-indigo-500' : 'text-white'} block font-semibold mb-2 text-lg hover:text-indigo-300`}
            to="/clientes"
          >Listar Clientes</Link>
          <Link 
            className={`${location.pathname === "/clientes/nuevo" ? 'text-indigo-500' : 'text-white'} block font-semibold mb-2 le text-lg hover:text-indigo-300`}
            to="/clientes/nuevo"
          >Nuevo Cliente</Link>
        </nav>
      </div>
      <div className="md:w-2/3 p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
