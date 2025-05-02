interface IInputProps {
  value: string;
  placeholder: string;
  size?: "small" | "medium" | "large"; 
  full?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
