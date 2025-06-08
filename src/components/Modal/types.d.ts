export interface IModalProps {
  children?: React.Node
  isOpen: boolean;
  closeButtonLabel?: string;
  primaryButtonLabel?: string;
  onClose: () => void;
  onPrimaryAction: () => void;
}