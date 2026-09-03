import { useState } from "react";

export const useForm = (inicialValue) => {
  const [formulario, setFormulario] = useState(inicialValue);
  const { email, password } = formulario;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormulario({ ...formulario, [name]: value });
  };
  const handleReset = () => {
    // console.log({...formulario})
    setFormulario(inicialValue);
  };

  const handleSubmit = (event, onLogin) => {
    event.preventDefault();
    handleReset();
    console.log(formulario);
    onLogin(email);
  };
  return {
    formulario,
    ...formulario,
    handleChange,
    handleSubmit,
    handleReset,
  };
};
