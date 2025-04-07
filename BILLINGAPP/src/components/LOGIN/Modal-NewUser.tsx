// ModalNewUser.tsx
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import "../../assets/styles/modalnewuser.css";
import { useState } from "preact/hooks";
import InputField from "./InputField";

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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!open) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="custom-modal-close" onClick={onClose}>
          <CloseIcon />
        </button>
        <h2 className="custom-modal-title">Nuevo usuario</h2>
        <form>
          <InputField
            label="Usuario"
            name="username"
            id="username"
            placeholder="Ingrese su usuario"
            value={formData.username}
            onChange={handleChange}
            required
            endAdornment={<AccountCircle />}
          />
          <InputField
            label="Email"
            name="email"
            id="email"
            placeholder="usuario@correo.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            endAdornment={<Email />}
          />
          <InputField
            label="Contraseña"
            name="password"
            id="password"
            placeholder="Ingrese su contraseña"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            endAdornment={<Lock />}
          />
        </form>
      </div>
    </div>
  );
}
