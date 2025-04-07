import "../assets/styles/login.css";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/layout/dashboard");
    }, 2000);
  };

  // Datos de prueba
  const data = {
    username: "admin",
    password: "admin",
  };
  const [formData, setFormData] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-container">
      <div className="login-container-form">
        <header className="login-header">
          <h1 className="login-header-title">Inicio de sesión</h1>
          <p className="login-header-description">Bienvenido, por favor ingrese sus datos para continuar</p>
        </header>

        {/* Formulario para manejar el login */}
        <form onSubmit={handleLogin} className="login-form">
          <FormControl className="login-form-control">
            <InputLabel htmlFor="login-outlined-username">Username</InputLabel>
            <OutlinedInput
              id="login-outlined-username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
              label="Usuario"
              required
            />
          </FormControl>

          <FormControl className="login-form-control">
            <InputLabel htmlFor="login-outlined-password">Password</InputLabel>
            <OutlinedInput
              id="login-outlined-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? "hide the password" : "display the password"}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>

          <Button
            className="login-form-button"
            variant="contained"
            color="primary"
            type="submit" // Asegura que el botón envíe el formulario
            disabled={loading} // Deshabilitar el botón mientras carga
            startIcon={loading ? <CircularProgress size={24} color="inherit" /> : null} // Progreso circular dentro del botón
          >
            {loading ? "Cargando..." : "Ingresar"}
          </Button>
        </form>

        <div className="login-form-footer">
          <section className="login-form-info">
            <p>En caso de problemas, contacta al soporte técnico</p>
            <p>soporte@gmail.com</p>
            <p>1234567890</p>
          </section>
          <p>
            ¿No tienes una cuenta? <RouterLink to="/register">Regístrate</RouterLink>
          </p>
        </div>
      </div>
    </div>
  );
}
