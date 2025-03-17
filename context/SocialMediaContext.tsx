"use client";

import {
  ActionTypes,
  IBox,
  ISelectedPlattform,
  ISocialMediaLinks,
  SocialMediaContextType,
} from "@/types/types";
import { createContext, ReactNode, useContext, useReducer } from "react";

export const SocialMediaContext = createContext<SocialMediaContextType | null>(
  null
);

const initialState: ISocialMediaLinks = { socialMediaLinks: [] };

const checkIfSocialMediaWasChoosen = (
  dispatchedObject: ISelectedPlattform,
  state: ISocialMediaLinks
): ISocialMediaLinks => {
  const indexOfIdOccurence: number = state.socialMediaLinks.findIndex(
    (item: ISelectedPlattform) => item.id == dispatchedObject.id
  );

  if (indexOfIdOccurence != -1) {
    let tempSocialMediaLinks = [...state.socialMediaLinks];
    tempSocialMediaLinks[indexOfIdOccurence] = dispatchedObject;
    return { socialMediaLinks: tempSocialMediaLinks };
  } else {
    return { socialMediaLinks: [...state.socialMediaLinks, dispatchedObject] };
  }
};

const removeChosenSocialMedia = (
  dispatchedObject: ISelectedPlattform,
  state: ISocialMediaLinks
): ISocialMediaLinks => {
  const indexOfIdOccurence: number = state.socialMediaLinks.findIndex(
    (item: ISelectedPlattform) => item.id == dispatchedObject.id
  );
  let tempSocialMediaLinks = [...state.socialMediaLinks];
  tempSocialMediaLinks.splice(indexOfIdOccurence, 1);
  return { socialMediaLinks: tempSocialMediaLinks };
};

const sortStateSocialMedia = (
  dispatchedObject: IBox[],
  state: ISocialMediaLinks
): ISocialMediaLinks => {
  let tempSocialMediaLinks = [...state.socialMediaLinks];
  let sortedSocialMediaLinks: ISelectedPlattform[] = [];

  dispatchedObject.forEach((item: IBox, index) => {
    //TODO check if both arrays have same length - other error checking
    const indexInTempSocialMediaLinks = tempSocialMediaLinks.findIndex(
      (element) => {
        return element.id === item.id;
      }
    );
    sortedSocialMediaLinks[index] =
      tempSocialMediaLinks[indexInTempSocialMediaLinks];
  });

  return { socialMediaLinks: sortedSocialMediaLinks };
};

const reducer = (
  state: ISocialMediaLinks,
  action: ActionTypes
): ISocialMediaLinks => {
  switch (action.type) {
    case "add":
      const socialMediaLinks = checkIfSocialMediaWasChoosen(
        action.payload as ISelectedPlattform,
        state
      );
      return socialMediaLinks;
    case "sort":
      const sortedSocialMediaLinks = sortStateSocialMedia(
        action.payload as IBox[],
        state
      );
      return sortedSocialMediaLinks;
    case "remove":
      return removeChosenSocialMedia(
        action.payload as ISelectedPlattform,
        state
      );
    default:
      throw new Error();
  }
};

export const useSocialMediaContext = () => {
  const context = useContext(SocialMediaContext);
  if (!context) {
    throw new Error("There is an issue creating the context");
  }
  return context;
};

export const SocialMediaProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SocialMediaContext.Provider
      value={{ socialMediaLinks: state.socialMediaLinks, dispatch }}
    >
      {children}
    </SocialMediaContext.Provider>
  );
};
