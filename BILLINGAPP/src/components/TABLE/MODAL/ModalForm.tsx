/**
 * @fileoverview Componente ModalForm
 * @description Componente que muestra un modal con un formulario para crear un usuario o un rol
 * @param {boolean} open - Indica si el modal está abierto
 * @param {function} onClose - Función que se ejecuta cuando se cierra el modal
 * @param {string} typeFormInModal - Indica el tipo de formulario que se muestra en el modal
 * @returns {JSX.Element} - Elemento JSX que representa el modal
 */

import CloseIcon from "@mui/icons-material/Close";
// Estilos del modal
import "../../../assets/styles/modalform.css";
// Import de los componentes de los formularios
import UserForm from "../../USERS/UserForm";
import RoleForm from "../../ROLES/RoleForm";

interface ModalFormProps {
  open: boolean;
  onClose: () => void;
  typeFormInModal: "users" | "roles";
}

export default function ModalForm({
  open,
  onClose,
  typeFormInModal,
}: ModalFormProps) {
  if (!open) return null;

  // Funcion para cerrar ModalForm desde el modal hijo de uno de los formularios
  const handleCloseFromChild = () => {
    onClose();
  };

  return (
    <div className="modal-form-overlay" onClick={onClose}>
      <div className="modal-form-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-form-close" onClick={onClose}>
          <CloseIcon />
        </button>

        {typeFormInModal === "users" ? (
          <>
            {/* Se muestra el formulario de usuarios */}
            {/* Se pasa la funcion handleCloseFromChild como prop al formulario de usuarios */}
            <UserForm onCloseParentFromChild={handleCloseFromChild} />
          </>
        ) : typeFormInModal === "roles" ? (
          <>
            {/* Se muestra el formulario de roles */}
            {/* Se pasa la funcion handleCloseFromChild como prop al formulario de roles */}
            <RoleForm onCloseParentFromChild={handleCloseFromChild} />
          </>
        ) : null}
      </div>
    </div>
  );
}
