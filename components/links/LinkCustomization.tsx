"use client";
import React, { useState } from "react";
import Button from "../shared/Button";
import "./linkCustomization.scss";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import LinkDragable from "./LinkDragable";
import StartImage from "./StartImage";
import { v4 as uuidv4 } from "uuid";

export interface IBox {
  id: string;
}

export interface ISelectedPlattform {
  id: string;
  name: string;
}

const LinkCustomization: React.FC = () => {
  const handleDragEnd = (result: any): void => {
    if (!result.destination) return;
    const newBox = Array.from(boxes);
    const [draggedItem] = newBox.splice(result.source.index, 1);
    newBox.splice(result.destination.index, 0, draggedItem);
    setBoxes(newBox);
  };

  const [boxes, setBoxes] = useState<IBox[]>([]);

  //TODO dispatch jedes Mal wenn Array der ausgewählten Social Media sich verändert hat

  const removeHandler = (id: string): void => {
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
                //UUIDV4 cause this list will be sorted
                if (boxes.length === 0) {
                  setBoxes([{ id: uuidv4() }]);
                } else if (boxes.length < 5) {
                  setBoxes((prevBoxes) => [...prevBoxes, { id: uuidv4() }]);
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
                              removeHandler={() => {
                                removeHandler(id);
                              }}
                              parentKey={id}
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
