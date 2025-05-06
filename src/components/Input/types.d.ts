interface IInputProps {
  value: string;
  placeholder: string;
  size?: "small" | "medium" | "large"; 
  full?: boolean;
  textarea?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
