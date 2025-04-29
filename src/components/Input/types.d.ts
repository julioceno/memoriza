interface IInputProps {
  value: string;
  placeholder: string;
  status: "filled" | "filling" | "empty";
  size?: "small" | "medium" | "large"; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
