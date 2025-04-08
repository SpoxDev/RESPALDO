// ModalNewUser.tsx
import { AccountCircle, Email, Lock, Phone } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import CloseIcon from "@mui/icons-material/Close";
import "../../../assets/styles/modalnewuser.css";
import { useState } from "preact/hooks";
// Imports de componentes propios
import InputField from "../../../utils/InputField";
import ChildModal from "./ChildModal";
import {
  FormControl,
  RadioGroup,
  TextField,
  FormControlLabel,
  Button,
} from "@mui/material";
import { roles } from "../../USERS/mockdata";

interface ModalNewUserProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalNewUser({ open, onClose }: ModalNewUserProps) {
  const [formData, setFormData] = useState({
    id: "",
    ci: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    address: "",
    status: "",
    error: false,
    helperText: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  if (!open) return null;

  return (
    <div className="modal-new-user-overlay" onClick={onClose}>
      <div
        className="modal-new-user-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-new-user-close" onClick={onClose}>
          <CloseIcon />
        </button>
        <h2 className="modal-new-user-title">Nuevo usuario</h2>
        <form className="modal-new-user-form" onSubmit={handleSubmit}>
          <section className="modal-new-user-form-section">
            <InputField
              className="modal-new-user-form-input first-name"
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
            <InputField
              className="modal-new-user-form-input last-name"
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
          <section className="modal-new-user-form-section">
            <InputField
              className="modal-new-user-form-input email"
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

            <section className="modal-new-user-form-subsection">
              <InputField
                className="modal-new-user-form-input username"
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

              <InputField
                className="modal-new-user-form-input password"
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
          <section className="modal-new-user-form-section">
            <section className="modal-new-user-form-subsection">
              <InputField
                className="modal-new-user-form-input ci"
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
              <InputField
                className="modal-new-user-form-input phone"
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
            <section className="modal-new-user-form-subsection">
              <FormControl className="modal-new-user-form-input role">
                <TextField
                  id="modal-new-user-form-input-select-role"
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

              <FormControl className="modal-new-user-form-input status">
                <RadioGroup
                  aria-labelledby="modal-new-user-form-input-status-label"
                  name="modal-new-user-form-input-status-group"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Activo"
                  />
                </RadioGroup>
              </FormControl>
            </section>
          </section>
          <section className="modal-new-user-form-buttons">
            <Button variant="contained" color="secondary" type="submit">
              Crear usuario
            </Button>
            <ChildModal />
          </section>
        </form>
      </div>
    </div>
  );
}
