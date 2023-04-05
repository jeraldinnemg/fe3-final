import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const enviarForm = (e) => {
    e.preventDefault();
    const validationErrors = validarCampos(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      setSubmitted(true);
      document.querySelector(
        ".submitted-message"
      ).innerHTML = `<h3>Gracias ${values.nombre}, te contactaremos cuanto antes vía email</h3>`;
    }
  };

  const validarCampos = (values) => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = "Debe ingresar un nombre válido";
    } else if (values.nombre.length < 5) {
      errors.nombre = "El nombre debe tener más de 5 letras";
    }
    if (!values.email) {
      errors.email = "Debe ingresar un email válido";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Debe ingresar un email válido";
    }
    return errors;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Formulario de contacto</h2>
      <form className="form" onSubmit={enviarForm}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="submitted-message"></div>
    </div>
  );
};

export default Form;
