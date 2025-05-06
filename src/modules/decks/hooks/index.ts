import { StatusBadgeEnum } from "../components/DeckCard/components/StatusBadge/typesStyles";
import { useSortableList } from "@/hooks";

export function useDecks() {
    const {
        items: decks,
        activeItem: activeDeck,
        itemsIds: decksIds,
        handleDragStart,
        handleDragEnd,
        handleDragCancel,
        sensors,
        sortableStrategy,
    } = useSortableList([
        { id: "1", title: "Entrevista Java", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "2", title: "Fundamentos de JavaScript", cardCount: 15, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "3", title: "Algoritmos e Estruturas de Dados", cardCount: 20, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "4", title: "React Avançado", cardCount: 12, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "5", title: "Design Patterns em Java", cardCount: 18, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "6", title: "Entrevista Python", cardCount: 14, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "7", title: "Banco de Dados SQL", cardCount: 16, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "8", title: "Redes de Computadores", cardCount: 11, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "9", title: "Estrutura de Sistemas Operacionais", cardCount: 13, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "10", title: "Introdução ao C++", cardCount: 10, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "11", title: "Desenvolvimento Web com Node.js", cardCount: 17, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "12", title: "Arquitetura de Software", cardCount: 19, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "13", title: "Machine Learning com Python", cardCount: 25, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "14", title: "Desenvolvimento de APIs RESTful", cardCount: 15, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "15", title: "Introdução ao Kotlin", cardCount: 12, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "16", title: "Programação Funcional em JavaScript", cardCount: 14, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "17", title: "Desenvolvimento de Jogos com Unity", cardCount: 20, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "18", title: "DevOps e Integração Contínua", cardCount: 16, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "19", title: "Segurança em Redes", cardCount: 18, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "20", title: "Flutter para Desenvolvimento Mobile", cardCount: 22, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "21", title: "Testes Unitários em Java", cardCount: 11, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "22", title: "Introdução ao Swift", cardCount: 13, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "23", title: "Big Data e Hadoop", cardCount: 17, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "24", title: "DevSecOps: Segurança no Ciclo de Vida do Desenvolvimento", cardCount: 19, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "25", title: "NoSQL: MongoDB e Firebase", cardCount: 14, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "26", title: "Blockchain e Criptomoedas", cardCount: 21, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "27", title: "Automação de Testes com Selenium", cardCount: 16, statusBadgeType: StatusBadgeEnum.WARNING },
        { id: "28", title: "Técnicas de Otimização de Código", cardCount: 12, statusBadgeType: StatusBadgeEnum.SUCCESS },
        { id: "29", title: "Administração de Sistemas Linux", cardCount: 14, statusBadgeType: StatusBadgeEnum.ERROR },
        { id: "30", title: "Inteligência Artificial e Redes Neurais", cardCount: 20, statusBadgeType: StatusBadgeEnum.SUCCESS }
    ]);

    return {
        decks,
        handleDragEnd,
        handleDragStart,
        handleDragCancel,
        activeDeck,
        sensors,
        sortableStrategy,
        decksIds
    }
}