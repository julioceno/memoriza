import { useIsMobile } from "@/hooks";
import { useEffect, useMemo, useState } from "react";
import { ICreateFlashCardModal } from "../types";

export function useCreateFlashCardModal({
  isOpen,
  initialQuestion = "",
  initialAnswer = "",
  activeId,
  onPrimaryAction,
  onClose
}: ICreateFlashCardModal) {
  const isMobile = useIsMobile();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const isPrimaryButtonDisabled = useMemo(() => {
    return !question.trim() || !answer.trim();
  }, [question, answer]);

  const primaryButtonTitle = useMemo(() => {
    return initialQuestion ? "Editar Flash Card" : "Criar Flash Card";
  }, [initialQuestion]);

  function handleQuestionChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setQuestion(event.target.value);
  }

  function handleAnswerChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setAnswer(event.target.value);
  }

  function handleOnClickPrimaryButton() {
    onPrimaryAction({ id: activeId, question, answer })
    onClose();
  }

  useEffect(() => {
    if (isOpen) {
      setQuestion(initialQuestion);
      setAnswer(initialAnswer);
    }
  }, [isOpen]);

  return {
    isMobile,
    question,
    answer,
    isPrimaryButtonDisabled,
    primaryButtonTitle,

    handleQuestionChange,
    handleAnswerChange,
    handleOnClickPrimaryButton
  }
}