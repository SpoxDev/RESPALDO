/**
 * @fileoverview Mockdata para los permisos
 * @description Mockdata para los permisos
 * @version 1.0.0
 * @since 1.0.0
 * @category Server
 * @subcategory Permissions
 */

/**
 * * Campos para el mockdata de los permisos
 * @type {Object}
 * @property {number} id - ID del permiso
 * @property {string} module - Modulo al que pertenece el permiso
 * @property {string} name - Nombre del permiso
 * @property {string} prefix - Prefijo del permiso
 * @property {boolean} isActive - Indica si el permiso está activo. Es un componente switch de mui
 */

/**
 * * Encabezados para el mockdata de los permisos
 * @type {Object}
 * @property {string} id - ID del permiso
 * @property {string} module - Modulo al que pertenece el permiso
 * @property {string} name - Nombre del permiso
 * @property {string} prefix - Prefijo del permiso
 * @property {boolean} isActive - Indica si el permiso está activo. Es un componente switch de mui
 */

export const permissionsHeaders = () => [
  { field: "id", headerName: "ID", width: 70 },
  { field: "module", headerName: "Modulo", width: 130 },
  { field: "name", headerName: "Nombre", width: 130 },
  { field: "prefix", headerName: "Prefijo", width: 130 },
  { field: "isActive", headerName: "Estado", width: 130 },
];

export const permissions = [
  {
    id: 1,
    module: "Usuarios",
    name: "Permiso 1",
    prefix: "USR",
    isActive: true,
  },
  {
    id: 2,
    module: "Usuarios",
    name: "Permiso 2",
    prefix: "USR",
    isActive: true,
  },
  {
    id: 3,
    module: "Usuarios",
    name: "Permiso 3",
    prefix: "USR",
    isActive: true,
  },
  {
    id: 4,
    module: "Usuarios",
    name: "Permiso 4",
    prefix: "USR",
    isActive: true,
  },
  {
    id: 5,
    module: "Usuarios",
    name: "Permiso 5",
    prefix: "USR",
    isActive: true,
  },
  {
    id: 6,
    module: "Roles",
    name: "Permiso 6",
    prefix: "ROL",
    isActive: true,
  },
  {
    id: 7,
    module: "Roles",
    name: "Permiso 7",
    prefix: "ROL",
    isActive: true,
  },
  {
    id: 8,
    module: "Roles",
    name: "Permiso 8",
    prefix: "ROL",
    isActive: true,
  },
  {
    id: 9,
    module: "Roles",
    name: "Permiso 9",
    prefix: "ROL",
    isActive: true,
  },
  {
    id: 10,
    module: "Roles",
    name: "Permiso 10",
    prefix: "ROL",
    isActive: true,
  },
  {
    id: 11,
    module: "Consultorios",
    name: "Permiso 11",
    prefix: "CONSUL",
    isActive: true,
  },
  {
    id: 12,
    module: "Consultorios",
    name: "Permiso 12",
    prefix: "CONSUL",
    isActive: true,
  },
  {
    id: 13,
    module: "Consultorios",
    name: "Permiso 13",
    prefix: "CONSUL",
    isActive: true,
  },
  {
    id: 14,
    module: "Consultorios",
    name: "Permiso 14",
    prefix: "CONSUL",
    isActive: true,
  },
  {
    id: 15,
    module: "Consultorios",
    name: "Permiso 15",
    prefix: "CONSUL",
    isActive: true,
  },
  {
    id: 16,
    module: "Emisor",
    name: "Permiso 16",
    prefix: "EMI",
    isActive: true,
  },
  {
    id: 17,
    module: "Emisor",
    name: "Permiso 17",
    prefix: "EMI",
    isActive: true,
  },
  {
    id: 18,
    module: "Emisor",
    name: "Permiso 18",
    prefix: "EMI",
    isActive: true,
  },
];
