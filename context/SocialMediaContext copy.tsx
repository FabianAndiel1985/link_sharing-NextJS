"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";

interface ISoicalMediaLinkItem {
  name: string;
  linkToIcon: string;
}

interface ISocialMediaLinks {
  socialMediaLinks: ISoicalMediaLinkItem[];
}

interface ActionTypes {
  type: "add" | "remove";
  payload: any;
}

interface SocialMediaContextType extends ISocialMediaLinks {
  dispatch: React.Dispatch<ActionTypes>;
}

export const SocialMediaContext = createContext<
  SocialMediaContextType | undefined
>(undefined);

const initialState: ISocialMediaLinks = { socialMediaLinks: [] };

const reducer = (
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
