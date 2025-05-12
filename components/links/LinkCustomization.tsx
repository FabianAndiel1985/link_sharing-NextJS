"use client";
import React, { useCallback, useState } from "react";
import Button from "../shared/Button";
import "./linkCustomization.scss";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import LinkDragable from "./LinkDragable";
import StartImage from "./StartImage";
import { v4 as uuidv4 } from "uuid";
import { useSocialMediaContext } from "@/context/SocialMediaContext";
import { IBox, ISelectedPlattform } from "@/types/types";
import { useFormik } from "formik";
import * as Yup from "yup";

const LinkCustomization: React.FC = () => {
  const [boxes, setBoxes] = useState<IBox[]>([]);

  const { dispatch } = useSocialMediaContext();

  let formik = useFormik<{ items: ISelectedPlattform[] }>({
    initialValues: {
      items: [],
    },

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      console.log("Submitting works");
      // formik.resetForm();
    },
  });

  //ToDo Refactor it to formik

  const removeHandler = useCallback(
    (selectedPlattform: ISelectedPlattform | null, id: string): void => {
      setBoxes((prevState) => {
        return [...prevState.filter((item) => item.id != id)];
      });
      if (selectedPlattform != null) {
        dispatch({
          type: "remove",
          payload: selectedPlattform,
        });
      }
    },
    []
  );

  const handleDragEnd = (result: any): void => {
    if (!result.destination) return;
    const newBox = Array.from(boxes);
    const [draggedItem] = newBox.splice(result.source.index, 1);
    newBox.splice(result.destination.index, 0, draggedItem);
    setBoxes(newBox);
    if (newBox.length > 1) {
      dispatch({
        type: "sort",
        payload: newBox,
      });
    }
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
                const id = uuidv4();
                formik.setFieldValue("items", [
                  ...formik.values.items,
                  { id: id, name: "" },
                ]);
                dispatch({
                  type: "add",
                  payload: { id: id, name: "" },
                });
                //UUIDV4 cause this list will be sorted
                if (boxes.length === 0) {
                  setBoxes([{ id: id }]);
                } else if (boxes.length < 5) {
                  setBoxes((prevBoxes) => [...prevBoxes, { id: id }]);
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
                              removeHandler={removeHandler}
                              parentKey={id}
                              value={
                                formik.values.items.find(
                                  (item: ISelectedPlattform) => item.id === id
                                )?.name || ""
                              }
                              formikFieldValues={formik.values.items}
                              setFormikFieldValue={formik.setFieldValue}
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
          <Button
            isFilled={true}
            isMiddleLink={false}
            text={"Save"}
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default LinkCustomization;
