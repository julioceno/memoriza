import { BottomSheet, Modal } from "@/components";
import { ICreateFlashCardModal } from "./types";
import { Content } from "./components";
import { useCreateFlashCardModal } from "./hooks";

export function CreateFlashCardModal(params: ICreateFlashCardModal) {
  const { isOpen, onClose } = params;
  const {
    isMobile,
    question,
    answer,
    isPrimaryButtonDisabled,
    primaryButtonTitle,
    handleAnswerChange,
    handleQuestionChange,
    handleOnClickPrimaryButton
  } = useCreateFlashCardModal(params);

  if (isMobile) {
    return (
      <BottomSheet
        isOpen={params.isOpen}
        onClose={onClose}
        actionButtonText={primaryButtonTitle}
        onPrimaryAction={handleOnClickPrimaryButton}
        isPrimaryButtonDisabled={isPrimaryButtonDisabled}
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
      onPrimaryAction={handleOnClickPrimaryButton}
      primaryButtonLabel={primaryButtonTitle}
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