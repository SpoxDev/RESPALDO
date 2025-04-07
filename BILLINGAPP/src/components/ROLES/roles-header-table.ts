// Encabezado de la tabla de roles
export const HeaderTable = () => {
  return [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre", width: 100 },
    { field: "prefix", headerName: "Prefijo", width: 100 },
    { field: "status", headerName: "Estado", width: 100 },
  ];
};
