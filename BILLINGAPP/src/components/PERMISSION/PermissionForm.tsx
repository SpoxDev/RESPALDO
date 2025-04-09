/**
 * @fileoverview Componente PermissionForm
 * @description Componente que muestra un formulario para crear un permiso
 * @returns {JSX.Element} - Elemento JSX que representa el formulario
 * @param {Object} formData - Estado del formulario
 * @param {Function} handleChange - Funcion para manejar el cambio del formulario
 * @param {Object} formData.name - Nombre del permiso
 * @param {Object} formData.isActive - Estado del permiso
 */

// Import de los estilos
import "../../assets/styles/newpermissionform.css";
// Import de los hooks
import { useState } from "preact/hooks";
// Import de los componentes de mui
import { Button, Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
// Import del componente InputFieldPermission
import InputFieldPermission from "../../utils/InputFieldPermission";
// Import del modal hijo
import ChildModal from "../TABLE/MODAL/ChildModal";

// Props para el componente PermissionForm
interface PermissionFormProps {
  onCloseParentFromChild: () => void;
}

// Inicio de la funcion principal del componente
export default function PermissionForm({
  onCloseParentFromChild,
}: PermissionFormProps) {
  const [formData, setFormData] = useState({
    module: "",
    name: "",
    prefix: "",
    isActive: false,
    error: false,
  });

  // Funcion para manejar el cambio del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Funcion para manejar el submit del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  // Funcion para cerrar el modal desde el componente hijo
  const handleCloseParentFromChild = () => {
    onCloseParentFromChild();
  };

  return (
    <>
      <div className="container-create-permission-form">
        <form className="permission-form" onSubmit={handleSubmit}>
          <header className="permission-form-header">
            <h1>Crear permiso</h1>
          </header>
          <section className="permission-form-section">
            <InputFieldPermission
              className="permission-form-input"
              label="Modulo"
              name="module"
              id="module"
              placeholder="Ingrese el modulo del permiso"
              type="text"
              value={formData.module}
              onChange={handleChange}
              required
              error={formData.error}
            />
            <InputFieldPermission
              className="permission-form-input"
              label="Nombre"
              name="name"
              id="name"
              placeholder="Ingrese el nombre del permiso"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              error={formData.error}
            />
          </section>
          <section className="permission-form-section">
            <InputFieldPermission
              className="permission-form-input permission-form-prefix"
              label="Prefijo"
              name="prefix"
              id="prefix"
              placeholder="Ingrese el prefijo del permiso"
              type="text"
              value={formData.prefix}
              onChange={handleChange}
              required
              error={formData.error}
            />
            <RadioGroup className="permission-form-radio-group">
              <FormControlLabel
                value="true"
                control={<Radio defaultChecked />}
                label="Habilitado"
              />
            </RadioGroup>
          </section>
          <section className="permission-form-buttons">
            <Button variant="contained" color="secondary" type="submit">
              Crear
            </Button>
            <ChildModal onCloseParentFromChild={handleCloseParentFromChild} />
          </section>
        </form>
      </div>
    </>
  );
}
