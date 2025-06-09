import { useIsMobile } from "@/hooks";
import { useEffect, useMemo, useState } from "react";
import { ICreateFlashCardModal } from "../types";

type IUseCreateFlashCardModalType =
  Pick<
    ICreateFlashCardModal,
    | "isOpen"
    | "initialQuestion"
    | "initialAnswer">

export function useCreateFlashCardModal({
  isOpen,
  initialQuestion = "",
  initialAnswer = "",
}: IUseCreateFlashCardModalType) {
  const isMobile = useIsMobile();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const isPrimaryButtonDisabled = useMemo(() => {
    return !question.trim() || !answer.trim();
  }, [question, answer]);

  function handleQuestionChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setQuestion(event.target.value);
  }

  function handleAnswerChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setAnswer(event.target.value);
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

    handleQuestionChange,
    handleAnswerChange
  }
}