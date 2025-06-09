import { useIsMobile } from "@/hooks";
import {
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { IItem } from "./types";

// TODO: padronizar todas as funções desse hook para serem arrow functions
export function useSortableList<T extends IItem>(initialItems: T[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [items, setItems] = useState<T[]>(initialItems);

  const isMobile = useIsMobile();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const sortableStrategy = useMemo(() => {
    return isMobile ? verticalListSortingStrategy : rectSortingStrategy;
  }, [isMobile]);

  const activeItem = useMemo(() => {
    return items.find((item) => item.id === activeId) || null;
  }, [activeId, items]);

  const itemsIds = useMemo(() => {
    return items.map((item) => item.id)
  }, [items])

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveId(active.id.toString());
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((prev) => {
      const oldIndex = prev.findIndex((item) => item.id === active.id);
      const newIndex = prev.findIndex((item) => item.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  function handleAddItem(newItem: T) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleEditItem(id: string, updatedItem: Partial<T>) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }
  
  function handleDeleteItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return {
    items,
    setItems,
    activeItem,
    itemsIds,
    
    sensors,
    sortableStrategy,

    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    handleAddItem,
    handleEditItem,
    handleDeleteItem
  };
}
