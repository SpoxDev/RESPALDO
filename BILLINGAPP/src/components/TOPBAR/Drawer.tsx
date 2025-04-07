import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Drawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerClose = () => setOpenDrawer(false);

  return (
    <>
      <Slide direction="left" in={openDrawer} mountOnEnter unmountOnExit>
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "50px",
            right: 0,
            width: "300px",
            // height: "calc(100% - 50px)",
            height: "100%",
            zIndex: 1200,
            padding: "1rem",
            borderLeft: "1px solid #ccc",
            backgroundColor: "#fff",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Notificaciones</Typography>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 1 }} />

          {/* Contenido del drawer */}
          <Box>
            <Typography variant="body2">
              No hay nuevas notificaciones.
            </Typography>
          </Box>
        </Paper>
      </Slide>
    </>
  );
}
