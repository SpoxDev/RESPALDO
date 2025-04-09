/**
 * Componente ModalInfoTableUser
 * @returns {JSX.Element} - Elemento JSX que representa el modal de información de la tabla de usuarios
 * @version 1.0.0
 * @since 1.0.0
 * @category Components
 * @subcategory Modal
 * @description Componente que muestra un modal de información de la tabla de usuarios
 * @param {number} usersCount - Cantidad de usuarios
 */
// Import de los estilos del modal
import "../../../assets/styles/modalinfotableuser.css";
import { Box, Tooltip, Typography } from "@mui/material";
// Import de los iconos de mui
import InfoIcon from "@mui/icons-material/Info";
// Import de componentes de mui
import Modal from "@mui/material/Modal";
import { useState } from "react";

// Propiedades del componente
type Props = {
  usersCount: number;
};

export default function ModalInfoTableUser({ usersCount }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip title="Detalles de la tabla" placement="right" arrow>
        <InfoIcon
          className="container-table-search-info"
          color="secondary"
          aria-label="info"
          onClick={handleOpen}
        />
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Box className="container-modal-info-table-user">
          <Typography variant="h6" component="h2">
            Detalles de la tabla
          </Typography>
          <Typography variant="body1" component="p">
            Cantidad de usuarios: {usersCount}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
