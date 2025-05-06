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