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

//==== handy image component ========================================0

export interface IEmptyRow {
  yCoordinate: number;
}

export interface IRowWithSocialMedia extends IEmptyRow {
  name: string;
}
