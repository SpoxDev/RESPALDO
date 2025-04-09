/**
 * * InputFieldPermissionProps
 * @returns {JSX.Element}
 * @description InputFieldPermissionProps
 * @param {string} label - Label del input
 * @param {string} name - Nombre del input
 * @param {string} id - Id del input
 * @param {string} placeholder - Placeholder del input
 * @param {string} type - Tipo de input
 * @param {boolean} required - Si es requerido o no
 * @param {React.ReactNode} endAdornment - Elemento que se muestra al final del input
 * @param {string} value - Valor del input
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Función que se ejecuta cuando el input cambia
 * @param {boolean} error - Si hay un error o no
 * @param {string} helperText - Texto de ayuda
 */

export interface InputFieldPermissionProps {
  className?: string;
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  endAdornment?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}
