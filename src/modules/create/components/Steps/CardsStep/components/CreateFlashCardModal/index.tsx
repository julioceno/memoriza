import { Input, Modal } from "@/components";
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
            <h2 className="text-black font-bold text-start text-lg">Criar novo flash card</h2>
            <p className="text-black text-start text-base">É interessante que o flash card tenha perguntas e respostas claras, para que facilite os seus estudos :)</p>

            <Input 
                value="" 
                placeholder="Insira sua pergunta" 
                onChange={() => {}} 
            />
            <Input 
                value=" Insirua sua resposta Insirua sua resposta Insirua sua resposta Insirua sua resposta Insirua sua resposta" 
                placeholder="Insirua sua resposta" 
                onChange={() => {}} 
            />
        </Modal>
    )
}