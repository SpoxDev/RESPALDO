import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
// Import de los datos de los usuarios
import { users } from "../../server/mockdata";
// Import del encabezado de la tabla
import { HeaderTable } from "./HeaderTable";
// Import de los componentes de mui
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Search from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "preact/hooks";

// Campos para la tabla de usuario
/*
 * id: ID del usuario
 * C.I: Cedula del usuario
 * firstName: Nombre del usuario
 * lastName: Apellido del usuario
 * email: Email del usuario
 * username: Nombre de usuario
 * password: Contraseña del usuario
 * phone: Teléfono del usuario
 * address: Dirección del usuario
 * status: Estado del usuario
 * fullName: Nombre completo del usuario
 */
const columns: GridColDef[] = HeaderTable();

const rows = users;

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((event.target as HTMLInputElement).value || "");
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <div className="users-container-table-search">
        <TextField
          className={"users-input-search"}
          placeholder={"Buscar usuario"}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          onChange={handleSearch}
        />
        <Tooltip title="Buscar usuario">
          <InfoIcon
            className="users-container-table-search-info"
            color="secondary"
            aria-label="info"
          />
        </Tooltip>
      </div>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ height: "inherit" }}
        />
      </Paper>
      <div className="users-container-table-buttons">
        <section className="users-container-table-buttons-left">
          <Button variant="outlined" color="warning">
            Refrescar
          </Button>
          <Button variant="outlined" color="success">
            Excel
          </Button>
        </section>
        <section className="users-container-table-buttons-right">
          <Button variant="contained" color="primary">
            Nuevo
          </Button>
          <Button variant="contained" color="secondary">
            Editar
          </Button>
          <Button variant="contained" color="error">
            Eliminar
          </Button>
        </section>
      </div>
    </>
  );
}
