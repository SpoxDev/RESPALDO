// Encabezado de la tabla de roles
export const HeaderTable = () => {
  return [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre", width: 160 },
    { field: "prefix", headerName: "Prefijo", width: 160 },
    { field: "status", headerName: "Estado", width: 740 },
  ];
};
