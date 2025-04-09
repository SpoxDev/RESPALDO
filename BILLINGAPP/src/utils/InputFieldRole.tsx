import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

interface InputFieldRoleProps {
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

export default function InputFieldRole({
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
  error,
}: InputFieldRoleProps) {
  return (
    <FormControl fullWidth margin="normal" className={className}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        endAdornment={
          endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : undefined
        }
        value={value}
        onChange={onChange}
        error={error}
      />
    </FormControl>
  );
}
