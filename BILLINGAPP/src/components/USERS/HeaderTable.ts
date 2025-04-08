/**
 * Componente para el encabezado de la tabla de usuarios
 * @returns {JSX.Element}
 */

export const HeaderTable = () => [
  { field: "id", headerName: "ID", width: 70 },
  { field: "CI", headerName: "C.I", width: 130 },
  { field: "firstName", headerName: "Nombre", width: 130 },
  { field: "lastName", headerName: "Apellido", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "username", headerName: "Nombre de usuario", width: 130 },
  { field: "phone", headerName: "Teléfono", width: 130 },
  { field: "address", headerName: "Dirección", width: 130 },
  {
    field: "fullName",
    headerName: "Nombre completo",
    sortable: false,
    width: 160,
    valueGetter: (
      {
        /*value: string*/
      },
      row: any
    ) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  { field: "status", headerName: "Estado", width: 130 },
];
