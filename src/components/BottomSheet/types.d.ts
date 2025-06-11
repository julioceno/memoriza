interface IBottomSheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  actionButtonText: string;
  isPrimaryButtonDisabled: boolean;

  onPrimaryAction: () => void;
  onClose: () => void;
}
