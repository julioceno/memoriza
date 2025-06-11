import { Input } from "@/components";
import { IContentProps } from "./types";

export const Content: React.FC<IContentProps> = ({ question, answer, handleQuestionChange, handleAnswerChange }) => {
  return (
    <>
      <h2 className="text-black font-bold text-start text-md md:text-md md:text-lg">Criar novo flash card</h2>
      <p className="text-black text-start text-sm md:text-base">É interessante que o flash card tenha perguntas e respostas claras, para que facilite os seus estudos :)</p>

      <div className="flex flex-col gap-2 mt-3">
        <Input
          value={question}
          placeholder="Pergunta"
          onChange={handleQuestionChange}
          textarea
          rows={4}
        />
        <Input
          value={answer}
          placeholder="Resposta"
          onChange={handleAnswerChange}
          textarea
          rows={4}
        />
      </div>
    </>
  );
};