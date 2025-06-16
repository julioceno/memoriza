export interface ICardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export interface ICardRef {
  resetFlip: () => void;
}
