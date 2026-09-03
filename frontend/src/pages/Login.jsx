import { useForm } from "../hooks/useForm.js";

export const Login = ({ onlogin }) => {
  const { formulario, handleChange, handleReset, handleSubmit } = useForm({
    email: "",
    password: "",
  });
  console.log(formulario);
  return (
    <form onSubmit={(event) => handleSubmit(event, onlogin)}>
      <div>
        <input
          type="text"
          name="email"
          placeholder="milanesaDpollo42@gmail.com"
          value={formulario.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="ingrese su contraseña aqui"
          value={formulario.password}
          onChange={handleChange}
        />
        <button type="submit" onChange={handleReset} />
        iniciar sesion
      </div>
    </form>
  );
};
