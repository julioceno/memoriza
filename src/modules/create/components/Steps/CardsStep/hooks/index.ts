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
        { id: "12", title: "Quantos continentes existem?", answer: "Sete" },
        { id: "13", title: "Qual é o idioma mais falado no mundo?", answer: "Mandarim" },
        { id: "14", title: "O que é a camada de ozônio?", answer: "Uma camada da atmosfera que filtra a radiação ultravioleta do sol." },
        { id: "15", title: "Quem foi o primeiro presidente do Brasil?", answer: "Deodoro da Fonseca" },
        { id: "16", title: "Qual é o principal gás responsável pelo efeito estufa?", answer: "Dióxido de carbono (CO₂)" },
        { id: "17", title: "Em que continente fica o deserto do Saara?", answer: "África" },
        { id: "18", title: "Qual é a função dos glóbulos vermelhos no sangue?", answer: "Transportar oxigênio" },
        { id: "19", title: "Quem descobriu o Brasil?", answer: "Pedro Álvares Cabral" },
        { id: "20", title: "O que significa HTML?", answer: "HyperText Markup Language" },
        { id: "21", title: "Qual é o valor de π (pi) com duas casas decimais?", answer: "3,14" },
        { id: "22", title: "Quem pintou 'A Última Ceia'?", answer: "Leonardo da Vinci" },
        { id: "23", title: "Qual é a capital do Japão?", answer: "Tóquio" },
        { id: "24", title: "Quem é considerado o pai da psicanálise?", answer: "Sigmund Freud" },
        { id: "25", title: "Qual é o maior oceano do mundo?", answer: "Oceano Pacífico" },
        { id: "26", title: "O que é um buraco negro?", answer: "Uma região do espaço com gravidade tão intensa que nada, nem a luz, pode escapar." },
        { id: "27", title: "Qual é a principal fonte de energia da Terra?", answer: "O Sol" },
        { id: "28", title: "Quem descobriu a teoria da evolução das espécies?", answer: "Charles Darwin" },
        { id: "29", title: "Qual é o maior animal terrestre?", answer: "Elefante africano" },
        { id: "30", title: "Quem escreveu 'A Divina Comédia'?", answer: "Dante Alighieri" },
        { id: "31", title: "Em que ano terminou a Segunda Guerra Mundial?", answer: "1945" }
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