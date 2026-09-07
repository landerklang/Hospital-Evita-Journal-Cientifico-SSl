import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";

export const Login = () => {
  const { formulario, handleChange, handleReset, handleSubmit } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { emai, password } = formulario;

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const fetchLogin = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(formulario),
        headers: {
          "Content-Type": "applicacion/json",
        },
        credentials: "include",
      });
      if (!fetchLogin.ok) {
        console.log(fetchLogin);
        console.log("Error al realizar la fetch");
      }
      const data = await fetchLogin.json();
      localStorage.setItem("token", data.token);
      alert(data.msg);
      console.log(data);
      navigate("/home");
    } catch (error) {
      console.log("Error interno del server" + error);
    }
  };

  console.log(formulario);
  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="text"
          name="email"
          placeholder="milanesaDpollo42@gmail.com"
          value={formulario.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="ingrese su contraseña aqui"
          value={formulario.password}
          onChange={handleChange}
        />
        <button>iniciar sesion</button>
      </div>
    </form>
  );
};
