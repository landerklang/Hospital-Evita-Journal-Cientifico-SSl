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
      const fetchregister = await fetch(
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
      if (!fetchregister.ok) {
        const errorData = await fetchregister.json();
        console.log("Error", errorData.error);
        return;
      }
      const data = await fetchregister.json();

      alert(data.mensaje);
      navigate("/home");
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
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          value={formulario.role}
          onChange={handleChange}
        />

        <button>iniciar sesion</button>
      </div>
    </form>
  );
};
