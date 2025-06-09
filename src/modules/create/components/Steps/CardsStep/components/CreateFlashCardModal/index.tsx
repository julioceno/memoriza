import { BottomSheet, Modal } from "@/components";
import { ICreateFlashCardModal } from "./types";
import { useIsMobile } from "@/hooks";
import { useEffect, useMemo, useState } from "react";
import { Content } from "./components";

export function CreateFlashCardModal({
  isOpen,
  onClose,
  onPrimaryAction,

  initialQuestion = "",
  initialAnswer = "",
  activeId
}: ICreateFlashCardModal) {
  const isMobile = useIsMobile();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const isPrimaryButtonDisabled = useMemo(() => {
    return !question.trim() || !answer.trim();
  }, [question, answer]);

  useEffect(() => {
    if (isOpen) {
      setQuestion(initialQuestion);
      setAnswer(initialAnswer);
    }
  }, [isOpen]);

  if (isMobile) {
    return (
      <BottomSheet
        isOpen={isOpen}
        onClose={onClose}
        actionButtonText="Criar flash card"
      >
        <Content
          question={question}
          answer={answer}
          handleQuestionChange={(e) => setQuestion(e.target.value)}
          handleAnswerChange={(e) => setAnswer(e.target.value)}
        />
      </BottomSheet>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onPrimaryAction={() => onPrimaryAction({ id: activeId, question, answer })}
      primaryButtonLabel={activeId ? "Editar Flash Card" : "Criar Flash Card"}
      isPrimaryButtonDisabled={isPrimaryButtonDisabled}
    >
      <Content
        question={question}
        answer={answer}
        handleQuestionChange={(e) => setQuestion(e.target.value)}
        handleAnswerChange={(e) => setAnswer(e.target.value)}
      />
    </Modal>
  );
}