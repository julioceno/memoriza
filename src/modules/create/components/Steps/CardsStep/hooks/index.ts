import { useSortableList } from "@/hooks";

export function useCardStep() {
    const {
        items: cards,
        activeItem: activeCard,
        itemsIds: cardsIds,
        handleDragStart,
        handleDragEnd,
        handleDragCancel,
        sensors,
        sortableStrategy,
    } = useSortableList([
        { id: "1", title: "Qual é a capital da França?", answer: "Paris" },
        { id: "2", title: "O que é fotossíntese?", answer: "É o processo pelo qual as plantas produzem energia a partir da luz solar." },
        { id: "3", title: "Quem escreveu 'Dom Quixote'?", answer: "Miguel de Cervantes" },
        { id: "4", title: "Qual é o elemento químico representado por 'O'?", answer: "Oxigênio" },
        { id: "5", title: "Em que ano o homem pisou na Lua pela primeira vez?", answer: "1969" },
        { id: "6", title: "Qual é a fórmula da água? Qual é a fórmula da água Qual é a fórmula da água Qual é a fórmula da água", answer: "H₂O" },
        { id: "7", title: "Quem foi Albert Einstein?", answer: "Um físico teórico que desenvolveu a teoria da relatividade." },
        { id: "8", title: "O que significa a sigla ONU?", answer: "Organização das Nações Unidas" },
        { id: "9", title: "Como se diz 'obrigado' em inglês?", answer: "'Thank you'" },
        { id: "10", title: "Qual é o maior planeta do sistema solar?", answer: "Júpiter" },
        { id: "11", title: "Quem pintou a Mona Lisa?", answer: "Leonardo da Vinci" },
    ]);

    return {
        cards,
        handleDragEnd,
        handleDragStart,
        handleDragCancel,
        activeCard,
        sensors,
        sortableStrategy,
        cardsIds
    }
}