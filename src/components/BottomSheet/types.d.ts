interface IBottomSheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  actionButtonText: string;
  isPrimaryButtonDisabled: boolean;
  isDisableClose?: boolean;

  onPrimaryAction: () => void;
  onClose: () => void;
}
