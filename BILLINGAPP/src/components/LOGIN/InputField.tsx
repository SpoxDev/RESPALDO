// components/InputField.tsx
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

interface InputFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  endAdornment?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  name,
  id,
  placeholder = "",
  type = "text",
  required = false,
  endAdornment,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <FormControl fullWidth margin="normal">
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
      />
    </FormControl>
  );
}
