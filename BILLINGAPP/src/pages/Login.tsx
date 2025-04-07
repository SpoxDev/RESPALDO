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
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Datos de prueba
  const validUser = {
    username: "admin",
    password: "admin",
  };

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });

    // Limpiar errores al escribir
    if (name === "username") setUsernameError("");
    if (name === "password") setPasswordError("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const isUsernameCorrect = formData.username === validUser.username;
      const isPasswordCorrect = formData.password === validUser.password;

      if (isUsernameCorrect && isPasswordCorrect) {
        navigate("/layout/dashboard");
      } else {
        if (!isUsernameCorrect) {
          setUsernameError("Usuario incorrecto");
        }

        if (!isPasswordCorrect) {
          setPasswordError("Contraseña incorrecta");
        }
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-container-form">
        <header className="login-header">
          <h1 className="login-header-title">Inicio de sesión</h1>
          <p className="login-header-description">Bienvenido, por favor ingrese sus datos para continuar</p>
        </header>

        <form onSubmit={handleLogin} className="login-form">
          <FormControl className="login-form-control" error={!!usernameError}>
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
            {usernameError && <p className="login-error-text">{usernameError}</p>}
          </FormControl>

          <FormControl className="login-form-control" error={!!passwordError}>
            <InputLabel htmlFor="login-outlined-password">Password</InputLabel>
            <OutlinedInput
              id="login-outlined-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
              required
            />
            {passwordError && <p className="login-error-text">{passwordError}</p>}
          </FormControl>

          <Button
            className="login-form-button"
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={24} color="inherit" /> : null}
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
