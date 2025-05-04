import { defaultAnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ISortableItemProps } from "./types";

// TODO: quando puxamos o drag pra fora da tela, o componente quebra
export function SortableItem({ id, children }: ISortableItemProps) {
    const {
        attributes,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 2 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
        >
            {children}
        </div>
    );
}