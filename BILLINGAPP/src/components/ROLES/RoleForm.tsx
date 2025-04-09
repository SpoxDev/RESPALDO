/**
 * @fileoverview Componente RoleForm
 * @description Componente que muestra un formulario para crear un rol
 * @returns {JSX.Element} - Elemento JSX que representa el formulario
 */
// Import de los estilos
import "../../assets/styles/newroleform.css";
// Import del componente InputFieldRole
import { useState } from "react";
import InputFieldRole from "../../utils/InputFieldRole";
// Import de los botones de mui
import Button from "@mui/material/Button";
// Import del componente ChildModal
import ChildModal from "../TABLE/MODAL/ChildModal";
import Radio from "@mui/material/Radio";
import { FormControlLabel, RadioGroup } from "@mui/material";

interface RoleFormProps {
  onCloseParentFromChild: () => void;
}

export default function RoleForm({ onCloseParentFromChild }: RoleFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    prefix: "",
    error: false,
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCloseParentFromChild = () => {
    onCloseParentFromChild();
  };

  return (
    <>
      <div className="role-form-container">
        <h2 className="role-form-title">Nuevo rol</h2>
        <form
          id="create-role-form"
          className="create-role-form"
          onSubmit={handleSubmit}
        >
          <section className="role-form-section">
            <InputFieldRole
              label="Nombre"
              name="name"
              id="name"
              placeholder="Ingrese el nombre del rol"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={formData.error}
            />
            <InputFieldRole
              label="Prefijo"
              name="prefix"
              id="prefix"
              placeholder="Ingrese el prefijo del rol"
              type="text"
              value={formData.prefix}
              onChange={handleChange}
              error={formData.error}
            />
          </section>
          <section className="role-form-section">
            <RadioGroup>
              <FormControlLabel
                value="true"
                control={<Radio defaultChecked />}
                label="Habilitado"
              />
            </RadioGroup>
          </section>
          <section className="role-form-buttons">
            <Button variant="contained" color="secondary" type="submit">
              Crear rol
            </Button>
            <ChildModal onCloseParentFromChild={handleCloseParentFromChild} />
          </section>
        </form>
      </div>
    </>
  );
}
