export interface ICreateFlashCardModal {
    isOpen: boolean;
    cardsIsEmpty: boolean;
    onPrimaryAction: ({ id, question, answer }: { id?: string, question: string; answer: string }) => void;
    onClose: () => void;

    initialQuestion?: string;
    initialAnswer?: string;
    activeId?: string;
}