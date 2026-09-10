import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";

export const Register = () => {
  const { formulario, handleChange } = useForm({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleregister = async (event) => {
    event.preventDefault();
    try {
      const fetchLogin = await fetch(
        "http://localhost:3000/api/auth/register",
        {
          method: "POST",
          body: JSON.stringify(formulario),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );
      if (!fetchLogin.ok) {
        const errorData = await fetchLogin.json();
        console.log("Error", errorData.error);
        return;
      }
      const data = await fetchLogin.json();
      login(data.usuario);

      alert(data.mensaje);
      navigate("/login");
    } catch (error) {
      console.error("Error interno del server" + error);
    }
  };
  return (
    <form onSubmit={handleregister}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="ingrese el nombre de usuario"
          value={formulario.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="ingrese la contraseña aqui"
          value={formulario.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="ingrese el correo aqui"
          value={formulario.email}
        />
        <input type="text" />
      </div>
    </form>
  );
};
