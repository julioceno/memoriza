
export interface ICreateFlashCardModal {
    isOpen: boolean;
    onPrimaryAction: ({ question, answer }: { question: string; answer: string }) => void;
    onClose: () => void;
}