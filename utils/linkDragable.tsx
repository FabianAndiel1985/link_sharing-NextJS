import { ActionTypes, ISelectedPlattform } from "@/types/types";

export const updateFormikAndContext = (
  selectedPlattform: ISelectedPlattform,
  formikFieldValues: ISelectedPlattform[],
  setFormikFieldValue: (name: string, value: ISelectedPlattform[]) => void,
  dispatch: React.Dispatch<ActionTypes>
) => {
  const indexOfIdOccurence: number = formikFieldValues.findIndex(
    (item: ISelectedPlattform) => item.id == selectedPlattform.id
  );
  formikFieldValues[indexOfIdOccurence] = {
    id: selectedPlattform.id,
    name: selectedPlattform.name,
  };
  setFormikFieldValue("items", [...formikFieldValues]);
  dispatch({
    type: "add",
    payload: selectedPlattform,
  });
};
