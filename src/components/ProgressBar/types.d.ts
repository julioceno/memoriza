interface IProgressBarProps {
  percentage: number;
  disableNext?: boolean;
  onPrevious: () => void;
  onNext: () => void;
}