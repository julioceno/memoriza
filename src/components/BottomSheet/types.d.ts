interface IBottomSheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  actionButtonText: string;
  onClose: () => void;
}
