import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
// Import de los componentes de mui
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Search from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "preact/hooks";
import Edit from "@mui/icons-material/Edit";
import { Add, Delete, Download, Refresh } from "@mui/icons-material";
// Import del modal de nuevo usuario
import ModalNewUser from "../LOGIN/Modal-NewUser";
// Import del css de la tabla
import "../../assets/styles/table.css";

// Props para el componente
interface TableProps {
  rows: any[];
  columns: GridColDef[];
  paginationModel: { page: number; pageSize: number };
}

export default function DataTable({
  rows,
  columns,
  paginationModel,
}: TableProps) {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState<any[]>([]); // Estado para filas seleccionadas
  // COnstante para el modal
  const [openModalNewUser, setOpenModalNewUser] = useState(false);
  const handleOpenModalNewUser = () => setOpenModalNewUser(true);
  const handleCloseModalNewUser = () => setOpenModalNewUser(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  // Filtrado en todas las propiedades de las filas
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // Función para manejar la selección de filas
  const handleSelectionModelChange = (newSelection: any) => {
    setSelectedRows(newSelection);
  };

  // Verificar si hay alguna fila seleccionada
  const isRowSelected = selectedRows.length > 0;

  return (
    <>
      <div className="container-table-search">
        <TextField
          className={"container-table-search-input"}
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
        <Tooltip title="Buscar usuario" placement="right" arrow>
          <InfoIcon
            className="container-table-search-info"
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
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={handleSelectionModelChange} // Actualiza el estado de filas seleccionadas
        />
      </Paper>
      <div className="container-table-buttons">
        <section className="container-table-buttons-left">
          <Button variant="outlined" color="warning" endIcon={<Refresh />}>
            Refrescar
          </Button>
          <Button variant="outlined" color="success" endIcon={<Download />}>
            Excel
          </Button>
        </section>
        <section className="container-table-buttons-right">
          <Button
            variant="contained"
            color="primary"
            endIcon={<Add />}
            onClick={handleOpenModalNewUser}
          >
            Nuevo
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={!isRowSelected} // Deshabilitar si no hay fila seleccionada
            endIcon={<Edit />}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="error"
            disabled={!isRowSelected} // Deshabilitar si no hay fila seleccionada
            endIcon={<Delete />}
          >
            Eliminar
          </Button>
        </section>
      </div>
      <ModalNewUser open={openModalNewUser} onClose={handleCloseModalNewUser} />
    </>
  );
}
