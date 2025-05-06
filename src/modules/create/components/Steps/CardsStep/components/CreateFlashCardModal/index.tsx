import { Modal } from "@/components";
import { ICreateFlashCardModal } from "./types";

export function CreateFlashCardModal({
    isOpen,
    onClose
}: ICreateFlashCardModal) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            dsadsadsa
        </Modal>
    )
}