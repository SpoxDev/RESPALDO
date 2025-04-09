/**
 * @fileoverview Componente UserForm
 * @description Componente que muestra un formulario para crear un usuario
 * @returns {JSX.Element} - Elemento JSX que representa el formulario
 *
 */
// Import de los estilos
import "../../assets/styles/newuserform.css";

// Import del componente InputField para realizar los inputs del formulario
import InputFieldUser from "../../utils/InputFieldUser";
// Import de los datos de los roles
import { roles } from "./mockdata";
// Import de los iconos de mui
import { Email, AccountCircle, Lock, Phone } from "@mui/icons-material";
// Import del estado
import { useState } from "react";
// Import del childmodal para cancelar o confirmar acción
import ChildModal from "../TABLE/MODAL/ChildModal";
// Import de los componentes de mui
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// Props del formulario de usuarios para cerrar el modal padre y el hijo
interface UserFormProps {
  onCloseParentFromChild: () => void;
}

export default function UserForm({ onCloseParentFromChild }: UserFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    ci: "",
    phone: "",
    role: "",
    status: "",
    error: false,
    helperText: "",
    startTime: "",
    endTime: "",
    dateError: "", // para mostrar el error si las fechas son inválidas
  });

  // Funcion para manejar los cambios en los inputs del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    // Si cambia la fecha de inicio
    if (name === "startTime") {
      const newStart = new Date(value);
      const newEnd = new Date(newStart.getTime() + 60 * 60 * 1000); // +1 hora

      setFormData((prev) => {
        // Solo ajustamos endTime si el actual está vacío o es menor que el nuevo startTime
        const shouldUpdateEnd =
          !prev.endTime || new Date(prev.endTime) <= newStart;

        return {
          ...prev,
          startTime: value,
          endTime: shouldUpdateEnd
            ? newEnd.toISOString().slice(0, 16)
            : prev.endTime,
          dateError: "", // limpiamos error si existe
        };
      });
      return;
    }

    // Si cambia la fecha de fin, validamos en tiempo real
    if (name === "endTime") {
      setFormData((prev) => {
        const start = new Date(prev.startTime);
        const end = new Date(value);

        const dateError =
          start && end && end <= start
            ? "La fecha de fin debe ser posterior a la fecha de inicio."
            : "";

        return {
          ...prev,
          endTime: value,
          dateError,
        };
      });
      return;
    }
    // Funcion para manejar el cambio del status
    if (name === "status") {
      setFormData((prev) => ({
        ...prev,
        status: value,
      }));
    }

    // Otros campos
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Funcion para manejar el envio del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { startTime, endTime } = formData;

    if (startTime && endTime) {
      const start = new Date(startTime);
      const end = new Date(endTime);

      if (end <= start) {
        setFormData((prev) => ({
          ...prev,
          dateError: "La fecha de fin debe ser posterior a la fecha de inicio.",
        }));
        return;
      }
    }

    // Si pasa la validación, limpiamos el error
    setFormData((prev) => ({ ...prev, dateError: "" }));

    console.log("Formulario válido:", formData);
  };

  // Funcion para cerrar el modal padre desde el modal hijo
  const handleCloseParentFromChild = () => {
    onCloseParentFromChild();
  };

  return (
    <>
      <div className="user-form-container">
        <h2 className="user-form-title">Nuevo usuario</h2>
        <form
          id="create-user-form"
          className="create-user-form"
          onSubmit={handleSubmit}
        >
          <section className="user-form-section">
            <InputFieldUser
              className="user-form-input first-name"
              label="Nombres"
              name="firstName"
              id="firstName"
              placeholder="Ingrese su nombre"
              value={formData.firstName}
              onChange={handleChange}
              required
              error={formData.error}
              helperText={formData.helperText}
            />
            <InputFieldUser
              className="user-form-input last-name"
              label="Apellidos"
              name="lastName"
              id="lastName"
              placeholder="Ingrese su apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
              error={formData.error}
              helperText={formData.helperText}
            />
          </section>
          <section className="user-form-section">
            <InputFieldUser
              className="user-form-input email"
              label="Email"
              name="email"
              id="email"
              placeholder="usuario@correo.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              endAdornment={<Email />}
              error={formData.error}
              helperText={formData.helperText}
            />

            <section className="user-form-subsection">
              <InputFieldUser
                className="user-form-input username"
                label="Usuario"
                name="username"
                id="username"
                placeholder="Ingrese su usuario"
                value={formData.username}
                onChange={handleChange}
                required
                endAdornment={<AccountCircle />}
                error={formData.error}
                helperText={formData.helperText}
              />

              <InputFieldUser
                className="user-form-input password"
                label="Contraseña"
                name="password"
                id="password"
                placeholder="Ingrese su contraseña"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                endAdornment={<Lock />}
                error={formData.error}
                helperText={formData.helperText}
              />
            </section>
          </section>
          <section className="user-form-section">
            <section className="user-form-subsection">
              <InputFieldUser
                className="user-form-input ci"
                label="Cédula"
                name="ci"
                id="ci"
                placeholder="Ingrese su cédula"
                value={formData.ci}
                onChange={handleChange}
                required
                endAdornment={<AccountCircle />}
                error={formData.error}
                helperText={formData.helperText}
              />
              <InputFieldUser
                className="user-form-input phone"
                label="Teléfono"
                name="phone"
                id="phone"
                placeholder="Ingrese su teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
                endAdornment={<Phone />}
                error={formData.error}
                helperText={formData.helperText}
              />
            </section>
            <section className="user-form-subsection">
              <FormControl className="user-form-input role">
                <TextField
                  id="user-form-input-select-role"
                  select
                  label="Rol"
                  defaultValue={roles[0].id}
                  slotProps={{
                    select: {
                      native: true,
                    },
                  }}
                >
                  {roles.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </FormControl>

              <FormControl className="user-form-input status">
                <RadioGroup
                  aria-labelledby="user-form-input-status-label"
                  name="user-form-input-status-group"
                  onChange={handleChange}
                  value={formData.status}
                >
                  <FormControlLabel
                    value="false"
                    control={<Radio defaultChecked />}
                    label="Habilitado"
                    required
                  />
                </RadioGroup>
              </FormControl>
            </section>
          </section>
          <section className="user-form-section">
            <div className="user-form-date-picker">
              <div className="user-form-date-picker-top">
                <div className="user-form-date-time-start">
                  <label htmlFor="startTime">Fecha y hora de inicio:</label>
                  <input
                    type="datetime-local"
                    id="startTime"
                    name="startTime"
                    className="user-form-input"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="user-form-date-time-end">
                  <label htmlFor="endTime">Fecha y hora de fin:</label>
                  <input
                    type="datetime-local"
                    id="endTime"
                    name="endTime"
                    className="user-form-input"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {formData.dateError && (
                <p className="user-form-date-error">{formData.dateError}</p>
              )}
            </div>
          </section>
          <section className="user-form-buttons">
            <Button variant="contained" color="secondary" type="submit">
              Crear usuario
            </Button>
            <ChildModal onCloseParentFromChild={handleCloseParentFromChild} />
          </section>
        </form>
      </div>
    </>
  );
}
