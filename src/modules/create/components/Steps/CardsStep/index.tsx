import { Button, SectionTitle, SortableItem } from "@/components";
import { FlashCard } from "./components";
import { useCardStep } from "./hooks";
import { restrictToFirstScrollableAncestor, restrictToParentElement } from "@dnd-kit/modifiers";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { StepperControls } from "../../StepperControls";
import { CreateFlashCardModal } from "./components/CreateFlashCardModal";

export const CardsStep: React.FC = () => {
    const {
        sensors,
        handleDragCancel,
        handleDragEnd,
        handleDragStart,
        cards,
        sortableStrategy,
        activeCard,
        cardsIds,
        cardsIsEmpty,

        isModalOpen,
        handleModalClose,
        handleModalOpen,
        handleCreateOrEditFlashCard,
        handleDeleteFlashCard,

        activeId,
        initialAnswer,
        initialQuestion
    } = useCardStep()

    return (
            <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
                <SectionTitle>
                    Crie seus cards
                </SectionTitle>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="self-start sm:w-full">
                        <Button shape="square" onClick={handleModalOpen}>
                            Criar Flash Card
                        </Button>
                    </div>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragCancel={handleDragCancel}
                        modifiers={[restrictToParentElement, restrictToFirstScrollableAncestor]}
                    >
                        <SortableContext
                            items={cardsIds}
                            strategy={sortableStrategy}
                        >
                            <div className="grid grid-cols-1 w-full lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                {cards.map((card) => {
                                    return (
                                        <SortableItem key={card.id} id={card.id}>
                                            <FlashCard 
                                                title={card.title} 
                                                id={card.id} 
                                                answer={card.answer} 
                                                onEdit={() => handleModalOpen({ id: card.id })}
                                                onDelete={() => handleDeleteFlashCard(card.id)}
                                            />
                                        </SortableItem>
                                    )
                                })}
                            </div>
                        </SortableContext>
                        <DragOverlay>
                            {activeCard ? (
                                <FlashCard
                                    id={activeCard.id}
                                    title={activeCard.title}
                                    answer={activeCard.answer}
                                    onEdit={() => null}
                                    onDelete={() => null}
                                />
                            ) : null}
                        </DragOverlay>
                    </DndContext>
                    <StepperControls isNextDisabled={cardsIsEmpty}/>
                </div>
                <CreateFlashCardModal 
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onPrimaryAction={handleCreateOrEditFlashCard}
                    initialAnswer={initialAnswer}
                    initialQuestion={initialQuestion}
                    cardsIsEmpty={cardsIsEmpty}
                    activeId={activeId}
                />
            </div>
    );
};