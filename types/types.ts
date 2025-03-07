import { ReactNode } from "react";

//========= shared

export interface ISelectedPlattform {
  id: string | number;
  name: string;
}

//==== link customization component ========================================

export interface IBox {
  id: string;
}

//==== link dragablecomponent ========================================

export interface DraggableProps {
  index: number;
  removeHandler: (param: ISelectedPlattform | null, id: string) => void;
  parentKey: string;
}

//==== handy image component ========================================

export interface IEmptyRow {
  yCoordinate: number;
}

export interface IRowWithSocialMedia extends IEmptyRow {
  name: string | null;
}

export interface IRowWithSocialMediaYCoor extends IRowWithSocialMedia {
  id: number;
}

//==== headerbar component ========================================

export interface HeaderBarProps {
  children: ReactNode;
}

//==== button component ========================================

export interface IButtonProps {
  isFilled: boolean;
  isMiddleLink: boolean;
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
  fullLength?: boolean;
}

//==== custom input component ========================================

export interface CustomInputProps {
  children?: ReactNode;
  clickHandler?: () => void;
}

//==== social media select component ========================================

export interface ISocialMediaSelectProps {
  parentKey: string;
  setSelectedPlattform: (param: ISelectedPlattform) => void;
  selectedPlattform: ISelectedPlattform | null;
}

export interface IShowMenuProps {
  isOpen: boolean;
}

export interface IPlattformEntryProps {
  icon: string;
  name: string;
}

export interface IPlattform extends IPlattformEntryProps {
  id: number;
}

//==== context ========================================

export interface ActionTypes {
  type: "add" | "remove";
  payload: ISelectedPlattform;
}

export interface ISocialMediaLinks {
  socialMediaLinks: ISelectedPlattform[];
}

export interface SocialMediaContextType extends ISocialMediaLinks {
  dispatch: React.Dispatch<ActionTypes>;
}
