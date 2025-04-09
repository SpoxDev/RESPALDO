// components/InputField.tsx
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
// Import del tipo para el input field de los campos para el formulario de user
import { InputFieldProps } from "../types/InputFieldUserProps";

export default function InputField({
  className,
  label,
  name,
  id,
  placeholder = "",
  type = "text",
  required = false,
  endAdornment,
  value,
  onChange,
  error = false,
}: InputFieldProps) {
  return (
    <FormControl fullWidth margin="normal" className={className}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
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
        label={label}
        error={error}
      />
    </FormControl>
  );
}
