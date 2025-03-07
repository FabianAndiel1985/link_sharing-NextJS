export interface IPlattform {
  id: number;
  name: string;
  icon: string;
}

export interface IPlattformEntryProps {
  icon: string;
  name: string;
}

export interface IShowMenuProps {
  isOpen: boolean;
}

export interface ISelectedPlattform {
  id: string | number;
  name: string;
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
