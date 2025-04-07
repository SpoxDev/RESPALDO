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
import { Delete, Download, Refresh } from "@mui/icons-material";

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
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={handleSelectionModelChange} // Actualiza el estado de filas seleccionadas
        />
      </Paper>
      <div className="users-container-table-buttons">
        <section className="users-container-table-buttons-left">
          <Button variant="outlined" color="warning" endIcon={<Refresh />}>
            Refrescar
          </Button>
          <Button variant="outlined" color="success" endIcon={<Download />}>
            Excel
          </Button>
        </section>
        <section className="users-container-table-buttons-right">
          <Button variant="contained" color="primary">
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
    </>
  );
}
