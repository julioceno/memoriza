export interface IModalProps {
  children?: React.Node
  isOpen: boolean;
  closeButtonLabel?: string;
  primaryButtonLabel?: string;
  isPrimaryButtonDisabled?: boolean,
  onClose: () => void;
  onPrimaryAction: () => void;
}