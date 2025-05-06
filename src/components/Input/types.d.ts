interface ICommonInputProps {
  value: string;
  placeholder: string;
  size?: "small" | "medium" | "large";
  full?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface ITextAreaProps extends ICommonInputProps {
  textarea: true;
  rows?: number;
}

interface ITextInputProps extends ICommonInputProps {
  textarea?: false;
  rows?: never;
}

type IInputProps = ITextAreaProps | ITextInputProps;
