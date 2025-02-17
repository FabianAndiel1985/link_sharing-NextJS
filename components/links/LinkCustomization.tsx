"use client";
import React, { useState } from "react";
import Button from "../shared/Button";
import "./linkCustomization.scss";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import LinkDragable from "./LinkDragable";
import StartImage from "./StartImage";

const LinkCustomization: React.FC = () => {
  const handleDragEnd = (result): void => {
    if (!result.destination) return;
    const newBox = Array.from(boxes);
    const [draggedItem] = newBox.splice(result.source.index, 1);
    newBox.splice(result.destination.index, 0, draggedItem);
    setBoxes(newBox);
  };

  const [boxes, setBoxes] = useState([{ id: 0 }, { id: 1 }]);

  const removeHandler = (id: number): void => {
    setBoxes((prevState) => {
      return [...prevState.filter((item) => item.id != id)];
    });
  };

  return (
    <>
      <div className={"customization"}>
        <div className={"customization__box"}>
          <h1>Customize your links</h1>

          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <div>
            <Button
              isFilled={false}
              isMiddleLink={false}
              text={"+ Add new link"}
              onClick={() => {
                if (boxes.length < 5) {
                  setBoxes((prevBoxes) => [
                    ...prevBoxes,
                    { id: prevBoxes.length + 1 },
                  ]);
                } else {
                }
              }}
              fullLength={true}
            />
          </div>

          {boxes.length > 0 ? (
            <DragDropContext onDragEnd={handleDragEnd}>
              <StrictModeDroppable droppableId="boxes">
                {(provided) => (
                  <ul ref={provided.innerRef} {...provided.droppableProps}>
                    {boxes.map(({ id }, index) => (
                      <Draggable
                        key={id}
                        draggableId={id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <LinkDragable
                              index={index + 1}
                              id={id}
                              removeHandler={removeHandler}
                            />
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </StrictModeDroppable>
            </DragDropContext>
          ) : (
            <StartImage />
          )}
        </div>

        <div className={"customization__saving-box"}>
          <Button isFilled={true} isMiddleLink={false} text={"Save"} />
        </div>
      </div>
    </>
  );
};

export default LinkCustomization;
