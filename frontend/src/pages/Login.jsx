import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";

export const Login = () => {
  const { formulario, handleChange } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = formulario;

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const fetchLogin = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(formulario),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!fetchLogin.ok) {
        const errorData = await fetchLogin.json();
        console.log("Error", errorData.error);
        return;
      }
      const data = await fetchLogin.json();
      alert(data.mensaje);
      navigate("/home");
    } catch (error) {
      console.error("Error interno del server" + error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="text"
          name="email"
          placeholder="milanesaDpollo42@gmail.com"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="ingrese su contraseña aqui"
          value={password}
          onChange={handleChange}
        />
        <button>iniciar sesion</button>
      </div>
    </form>
  );
};
