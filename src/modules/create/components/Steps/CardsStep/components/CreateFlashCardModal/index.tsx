import { BottomSheet, Modal } from "@/components";
import { ICreateFlashCardModal } from "./types";
import { Content } from "./components";
import { useCreateFlashCardModal } from "./hooks";

export function CreateFlashCardModal(params: ICreateFlashCardModal) {
  const { isOpen, onClose, onPrimaryAction, activeId } = params;
  const {
    isMobile,
    question,
    answer,
    isPrimaryButtonDisabled,
    handleAnswerChange,
    handleQuestionChange
  } = useCreateFlashCardModal(params);

  if (isMobile) {
    return (
      <BottomSheet
        isOpen={params.isOpen}
        onClose={onClose}
        actionButtonText="Criar flash card"
      >
        <Content
          question={question}
          answer={answer}
          handleQuestionChange={handleQuestionChange}
          handleAnswerChange={handleAnswerChange}
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
        handleQuestionChange={handleQuestionChange}
        handleAnswerChange={handleAnswerChange}
      />
    </Modal>
  );
}