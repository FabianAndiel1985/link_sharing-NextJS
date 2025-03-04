"use client";

import { ISelectedPlattform } from "@/components/links/SocialMediaSelect";
import { createContext, ReactNode, useContext, useReducer } from "react";

interface ISoicalMediaLinkItem {
  name: string;
  linkToIcon: string;
}

interface ISocialMediaLinks {
  socialMediaLinks: ISelectedPlattform[];
}

interface ActionTypes {
  type: "add" | "remove";
  payload: ISelectedPlattform;
}

interface SocialMediaContextType extends ISocialMediaLinks {
  dispatch: React.Dispatch<ActionTypes>;
}

export const SocialMediaContext = createContext<SocialMediaContextType | null>(
  null
);

const initialState: ISocialMediaLinks = { socialMediaLinks: [] };

/*const reducer = (
  state: ISocialMediaLinks,
  action: ActionTypes
): ISocialMediaLinks => {
  switch (action.type) {
    case "add":
      return {
        socialMediaLinks: [...state.socialMediaLinks, action.payload],
      };
    case "remove":
    //todo
    default:
      throw new Error();
  }
}; */

const checkIfSocialMediaWasChoosen = (
  dispatchedObject: ISelectedPlattform,
  state: ISocialMediaLinks
) => {
  const indexOfIdOccurence: number = state.socialMediaLinks.findIndex(
    (item: any) => item.id == dispatchedObject.id
  );

  if (indexOfIdOccurence != -1) {
    let tempSocialMediaLinks = [...state.socialMediaLinks];
    tempSocialMediaLinks[indexOfIdOccurence] = dispatchedObject;
    return { socialMediaLinks: tempSocialMediaLinks };
  } else {
    return { socialMediaLinks: [...state.socialMediaLinks, dispatchedObject] };
  }
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
    //todo
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
