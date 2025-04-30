interface IInputProps {
  value: string;
  placeholder: string;
  status: "filled" | "filling" | "empty";
  size?: "small" | "medium" | "large"; 
  full?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
