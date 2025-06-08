export interface IModalProps {
  children?: React.Node
  isOpen: boolean;
  onClose: () => void;
  onPrimaryAction: () => void;
}