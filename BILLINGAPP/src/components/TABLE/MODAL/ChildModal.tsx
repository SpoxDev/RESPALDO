// Imports de estilos
import "../../../assets/styles/childmodal.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import React from "react";

export default function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        >
          <Box className="child-modal-box">
            <Typography variant="h6" id="child-modal-title">
              ¿Está Seguro que desea cancelar la acción?
            </Typography>
            <section className="child-modal-buttons">
              <Button color="primary" variant="outlined">
                Si
              </Button>
              <Button color="error" variant="outlined">
                No
              </Button>
            </section>
          </Box>
        </Modal>
      </React.Fragment>
    </>
  );
}
