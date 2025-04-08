// Listado de roles para usar en el componente data Table
// Campos para la tabla de roles
/*
 * id: ID del rol
 * name: Nombre del rol
 * prefix: Prefijo del rol
 * status: Estado del rol
 */
// Roles
/*
 * ADMINISTRADOR:
 * Prefijo: ADM
 * Descripción: Administrador del sistema
 * ASISTENTE:
 * Prefijo: ASI
 * Descripción: Asistente del sistema
 * MEDICO:
 * Prefijo: MED
 * Descripción: Medico del sistema
 * CAJERO:
 * Prefijo: CAJ
 * Descripción: Cajero del sistema
 * CONTABILIDAD:
 * Prefijo: CON
 * Descripción: Contabilidad del sistema
 */

export const roles = [
  {
    id: 1,
    name: "Administrador",
    prefix: "ADM",
    status: true,
  },
  {
    id: 2,
    name: "Asistente",
    prefix: "ASI",
    status: true,
  },
  {
    id: 3,
    name: "Medico",
    prefix: "MED",
    status: true,
  },
  {
    id: 4,
    name: "Emisor",
    prefix: "EMI",
    status: true,
  },
  {
    id: 5,
    name: "Contable",
    prefix: "CON",
    status: false,
  },
];
