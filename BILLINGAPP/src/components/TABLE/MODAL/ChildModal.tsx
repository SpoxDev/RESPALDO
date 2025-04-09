/**
 * @fileoverview Componente ChildModal
 * @description Componente que muestra un modal con un formulario para cancelar una acción o confirmar una acción
 * @returns {JSX.Element} - Elemento JSX que representa el modal
 * @param {boolean} open - Indica si el modal está abierto
 * @param {function} onClose - Función que se ejecuta cuando se cierra el modal
 */

// Imports de estilos
import "../../../assets/styles/childmodal.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import React from "react";

// Props del modal hijo para cerrar el modal padre y el hijo
interface ChildModalProps {
  onCloseParentFromChild: () => void;
}

export default function ChildModal({
  onCloseParentFromChild,
}: ChildModalProps) {
  const [open, setOpen] = useState(false);
  // Funcion para abrir el modal hijo
  const handleOpen = () => setOpen(true);
  // Funcion para cerrar el modal hijo
  const handleClose = () => setOpen(false);
  // Funcion para cerrar el modal padre y el hijo en caso de que se presione el boton Si
  const handleCloseFromChild = () => {
    onCloseParentFromChild();
    handleClose();
  };
  return (
    <>
      <React.Fragment>
        <Button onClick={handleOpen} color="error" variant="contained">
          Cancelar
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          hideBackdrop
          disableEscapeKeyDown
        >
          <Box className="child-modal-box">
            <Typography variant="h6" className="child-modal-title">
              Cancelar Acción
            </Typography>
            <Typography className="child-modal-description">
              ¿Está Seguro que desea cancelar la acción?
            </Typography>
            <section className="child-modal-buttons">
              {/* Funcion para cerrar el modal padre y el hijo en caso de que se presione el boton Si */}
              <Button
                color="primary"
                variant="outlined"
                onClick={handleCloseFromChild}
              >
                Si
              </Button>
              {/* Funcion para cerrar el modal hijo en caso de que se presione el boton No */}
              <Button color="error" variant="outlined" onClick={handleClose}>
                No
              </Button>
            </section>
          </Box>
        </Modal>
      </React.Fragment>
    </>
  );
}
