import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const Formulario = ({ cliente, cargando }) => {

  const navigate = useNavigate();

  const handleSubmit = async (valores) => {
    let respuesta;
    try {
      if( cliente?.id ) {
          const url = `http://localhost:4000/clientes/${cliente.id}`;
          respuesta = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(valores),
            headers: {
              "Content-Type": "application/json"
            }
          })
      } else {
        const url = "http://localhost:4000/clientes";
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await respuesta.json();

    } catch (error) {
      console.log(error)
    }
  };

  const formSchema = Yup.object().shape({
    nombre: Yup.string()
                .min(3,"El nombre es muy corto")
                .max(25,"El nombre es muy largo")
                .required("El nombre es obligatorio"),
    empresa: Yup.string()
                .required("El nombre de la empresa es obligatorio"),
    email: Yup.string()
              .email("Email no válido")
              .required("El email es obligatorio"),
    telefono: Yup.number()
                  .typeError("Número no válido")
                  .positive("Número no válido")
                  .integer("Número no válido"),
  });

  return (
    cargando ? <Spinner />
    : (
      <div className="bg-white md:w-4/5 mt-10 mx-auto px-10 py-2">
        <h2 className="font-bold my-5 text-center text-gray-700 text-2xl uppercase">
          { cliente?.nombre ? "Editar Cliente" : "Agregar Cliente" }
        </h2>
        <Formik
          initialValues={{
            nombre: cliente?.nombre ?? "",
            empresa: cliente?.empresa ?? "",
            email: cliente?.email ?? "",
            telefono: cliente?.telefono ?? "",
            notas: cliente?.notas ?? "",
          }}
          enableReinitialize={true}
          onSubmit={ async (values, {resetForm}) => { 
            await handleSubmit(values);

            resetForm();

            navigate("/clientes");
          } }
          validationSchema={formSchema}
        >
          {({errors, touched}) => {
            return (
            <Form>
              <div className="mb-5">
                <label htmlFor="nombre" className="font-medium text-slate-600">
                  Nombre:
                </label>
                <Field
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="bg-slate-100 block mt-1 px-5 py-2 rounded-md w-full focus:outline-none"
                  placeholder="Nombre del Cliente"
                />
                {(errors.nombre && touched.nombre) && <Alerta>{errors.nombre}</Alerta>}
              </div>
              <div className="mb-5">
                <label htmlFor="empresa" className="font-medium text-slate-600">
                  Empresa:
                </label>
                <Field
                  id="empresa"
                  name="empresa"
                  type="text"
                  className="bg-slate-100 block mt-1 px-5 py-2 rounded-md w-full focus:outline-none"
                  placeholder="Empresa del Cliente"
                />
                {(errors.empresa && touched.empresa) && <Alerta>{errors.empresa}</Alerta>}
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="font-medium text-slate-600">
                  E-mail:
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="bg-slate-100 block mt-1 px-5 py-2 rounded-md w-full focus:outline-none"
                  placeholder="Email del Cliente"
                />
                {(errors.email && touched.email) && <Alerta>{errors.email}</Alerta>}
              </div>
              <div className="mb-5">
                <label htmlFor="telefono" className="font-medium text-slate-600">
                  Teléfono:
                </label>
                <Field
                  id="telefono"
                  name="telefono"
                  type="tel"
                  className="bg-slate-100 block mt-1 px-5 py-2 rounded-md w-full focus:outline-none"
                  placeholder="Telefono del Cliente"
                />
                {(errors.telefono && touched.telefono) && <Alerta>{errors.telefono}</Alerta>}
              </div>
              <div className="mb-5">
                <label htmlFor="notas" className="font-medium text-slate-600">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="notas"
                  name="notas"
                  type="email"
                  className="bg-slate-100 block mt-1 px-5 py-2 rounded-md w-full focus:outline-none"
                  placeholder="Email del Cliente"
                />
              </div>
              <input
                type="submit"
                value={ cliente?.nombre ? "Editar cliente" : "Agregar cliente"}
                className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer font-medium md:flex md:w-2/4 mb-5 md:ml-auto px-5 py-2 rounded-md justify-center text-slate-100 transition-all uppercase"
              />
            </Form>
          )}}
        </Formik>
      </div>
  ));
}

Formulario.defaulProps = {
  cliente: {},
  cargando: false
};

export default Formulario
