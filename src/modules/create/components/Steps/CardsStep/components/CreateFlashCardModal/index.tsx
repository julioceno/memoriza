import { BottomSheet, Modal } from "@/components";
import { ICreateFlashCardModal } from "./types";
import { useIsMobile } from "@/hooks";
import { useEffect, useState } from "react";
import { Content } from "./components";

export function CreateFlashCardModal({
  isOpen,
  onClose,
  onPrimaryAction
}: ICreateFlashCardModal) {
  const isMobile = useIsMobile();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");


  useEffect(() => {
    if (isOpen) {
      setQuestion("");
      setAnswer("");
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
      onPrimaryAction={() => onPrimaryAction({ question, answer })}
      primaryButtonLabel="Criar Card"
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