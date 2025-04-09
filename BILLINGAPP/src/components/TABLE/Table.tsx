/**
 * @fileoverview Componente DataTable
 * @description Componente que muestra una tabla de datos
 * @returns {JSX.Element} - Elemento JSX que representa la tabla.
 * @param {any[]} rows - Datos de la tabla
 * @param {GridColDef[]} columns - Columnas de la tabla
 * @param {Object} paginationModel - Modelo de paginación
 * @param {string} typeForm - Tipo de formulario a mostrar en el modal
 */

// Import del css de la tabla
import "../../assets/styles/table.css";
// Import de los componentes de mui
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Search from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import InfoIcon from "@mui/icons-material/Info";
import { useMemo, useState } from "preact/hooks";
import Edit from "@mui/icons-material/Edit";
import { Add, Delete, Download, Refresh } from "@mui/icons-material";
import ModalForm from "./MODAL/ModalForm";
// Import del debounce
import debounce from "../../utils/debounce";

// Props para el componente
interface TableProps {
  rows: any[];
  columns: GridColDef[];
  paginationModel: { page: number; pageSize: number };
  typeForm: "users" | "roles";
}

export default function DataTable({
  rows,
  columns,
  paginationModel,
  typeForm,
}: TableProps) {
  const [searchInput, setSearchInput] = useState(""); // lo que escribe el usuario
  const [search, setSearch] = useState(""); // el estado final que usaremos para filtrar
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [openModalForm, setOpenModalForm] = useState(false);

  // Debounced search setter
  const debouncedSetSearch = useMemo(
    () => debounce((value: string) => setSearch(value), 300),
    []
  );

  const handleOpenModalForm = () => setOpenModalForm(true);
  const handleCloseModalForm = () => setOpenModalForm(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setSearchInput(value);
    debouncedSetSearch(value); // actualiza "search" después del debounce
    console.log(search);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleSelectionModelChange = (newSelection: any) => {
    setSelectedRows(newSelection);
  };

  const isRowSelected = selectedRows.length > 0;

  return (
    <>
      <div className="container-table-search">
        <TextField
          className="container-table-search-input"
          placeholder="Buscar usuario"
          value={searchInput}
          onChange={handleSearchChange}
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
          onRowSelectionModelChange={handleSelectionModelChange}
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
            onClick={handleOpenModalForm}
          >
            Nuevo
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={!isRowSelected}
            endIcon={<Edit />}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="error"
            disabled={!isRowSelected}
            endIcon={<Delete />}
          >
            Eliminar
          </Button>
        </section>
      </div>

      <ModalForm
        open={openModalForm}
        onClose={handleCloseModalForm}
        typeFormInModal={typeForm}
      />
    </>
  );
}
