import { BottomSheet, Input, Modal } from "@/components";
import { ICreateFlashCardModal } from "./types";
import { useIsMobile } from "@/hooks";
import { useState } from "react";

export function CreateFlashCardModal({
    isOpen,
    onClose,
}: ICreateFlashCardModal) {
    const isMobile = useIsMobile()

    const Content = () => {
        const [question, setQuestion] = useState<string>("");
        const [answer, setAnswer] = useState<string>("");

        return (
            <>
                <h2 className="text-black font-bold text-start text-md md:text-md md:text-lg">Criar novo flash card</h2>
                <p className="text-black text-start text-sm md:text-base">É interessante que o flash card tenha perguntas e respostas claras, para que facilite os seus estudos :)</p>

                <div className="flex flex-col gap-2 mt-3 h-full">
                    <Input
                        value={question}
                        placeholder="Pergunta"
                        onChange={e => setQuestion(e.target.value)}
                        textarea
                        rows={4}
                    />
                    <Input
                        value={answer}
                        placeholder="Resposta"
                        onChange={e => setAnswer(e.target.value)}
                        textarea
                        rows={4}
                    />
                </div>
            </>
        )
    }

    if (isMobile) {
        return (
            <BottomSheet
                isOpen={isOpen}
                onClose={onClose}
                actionButtonText="Criar flash card"
            >
                <Content />
            </BottomSheet>
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <Content />
        </Modal>
    )
}