// components/InputField.tsx
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

interface InputFieldProps {
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
