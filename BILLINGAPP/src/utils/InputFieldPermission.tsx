/**
 * * InputFieldPermission
 * @returns {JSX.Element}
 * @description InputFieldPermission
 * @param {string} label - Label del input
 * @param {string} name - Nombre del input
 * @param {string} id - Id del input
 * @param {string} placeholder - Placeholder del input
 * @param {string} type - Tipo de input
 * @param {boolean} required - Si es requerido o no
 * @param {boolean} error - Si hay un error o no
 * @param {React.ReactNode} endAdornment - Elemento que se muestra al final del input
 * @param {string} value - Valor del input
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Función que se ejecuta cuando el input cambia
 */

// Impor del component mui
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
// Import del tipo para el input de permission
import { InputFieldPermissionProps } from "../types/inputFieldPermissionProps";

export default function InputFieldPermission({
  className,
  label,
  name,
  id,
  placeholder,
  type,
  required,
  endAdornment,
  value,
  onChange,
  error = false,
}: InputFieldPermissionProps) {
  return (
    <FormControl fullWidth margin="normal" className={className}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        className={className}
        label={label}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        endAdornment={
          endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : undefined
        }
        error={error}
      />
    </FormControl>
  );
}
