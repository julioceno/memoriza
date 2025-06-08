export interface IContentProps {
    question: string;
    answer: string;
    handleQuestionChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    handleAnswerChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}