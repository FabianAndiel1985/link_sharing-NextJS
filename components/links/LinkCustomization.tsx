"use client";
import React, { useState } from "react";
import Button from "../shared/Button";
import "./linkCustomization.scss";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import LinkDragable from "./LinkDragable";

const LinkCustomization: React.FC = () => {
  const handleDragEnd = (result): void => {
    if (!result.destination) return;
    const newBox = Array.from(boxes);
    const [draggedItem] = newBox.splice(result.source.index, 1);
    newBox.splice(result.destination.index, 0, draggedItem);
    setBoxes(newBox);
  };

  const [boxes, setBoxes] = useState([{ id: 0 }, { id: 1 }]);

  return (
    <>
      <div className={"customization-box"}>
        <p>Customize your links</p>

        <small>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </small>
        <br />
        <br />
        <Button
          isFilled={false}
          isMiddleLink={false}
          text={"+ Add new link"}
          onClick={() => {
            if (boxes.length < 6) {
              setBoxes((prevBoxes) => [
                ...prevBoxes,
                { id: prevBoxes.length + 1 },
              ]);
            } else {
              console.log("reached maximum");
            }
          }}
        />

        <DragDropContext onDragEnd={handleDragEnd}>
          <StrictModeDroppable droppableId="boxes">
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {boxes.map(({ id }, index) => (
                  <Draggable key={id} draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <LinkDragable index={index + 1} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>

      <div className={"saving-box"}>
        <Button isFilled={true} isMiddleLink={false} text={"Save"} />
      </div>
    </>
  );
};

export default LinkCustomization;
