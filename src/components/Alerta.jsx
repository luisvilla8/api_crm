import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className="bg-red-100 mt-2 py-1 px-2 rounded-sm text-red-600">
      {children}
    </div>
  )
}

export default Alerta
