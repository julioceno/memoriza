import { BottomSheet, Modal } from "@/components";
import { ICreateFlashCardModal } from "./types";
import { useIsMobile } from "@/hooks";
import { useState } from "react";
import { Content } from "./components";

export function CreateFlashCardModal({
  isOpen,
  onClose,
}: ICreateFlashCardModal) {
  const isMobile = useIsMobile();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

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
      onPrimaryAction={() => { }}
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