"use client";

import {
  ActionTypes,
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

const reducer = (
  state: ISocialMediaLinks,
  action: ActionTypes
): ISocialMediaLinks => {
  switch (action.type) {
    case "add":
      const socialMediaLinks = checkIfSocialMediaWasChoosen(
        action.payload,
        state
      );
      return socialMediaLinks;
    case "remove":
      return removeChosenSocialMedia(action.payload, state);
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
